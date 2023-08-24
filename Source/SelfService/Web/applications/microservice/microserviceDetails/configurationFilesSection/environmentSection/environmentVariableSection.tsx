// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';

import { MicroserviceStore } from '../../../../stores/microservice';

import { DataGridPro, GridRowId, GridRowModesModel, GridRowModes, GridRowModel } from '@mui/x-data-grid-pro';
import { Box } from '@mui/material';

import { Accordion, Button, dataGridDefaultProps, DataGridWrapper } from '@dolittle/design-system';

import { getEnvironmentVariables, getServerUrlPrefix, InputEnvironmentVariable, updateEnvironmentVariables } from '../../../../../apis/solutions/api';

import { RestartInfoBox } from '../../../components/restartInfoBox';
import { EmptyDataTable } from '../../../components/emptyDataTable';
import { envVariableColumns } from './tableColumns';

const styles = {
    buttonWrapper: {
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        alignItems: 'start',
        mb: 1.5,
        button: {
            'mr': 2.5,
            'mb': 1,
            '&:last-of-type': { mr: 0 },
        },
    },
    dataTable: {
        '& .MuiOutlinedInput-root': {
            // Hack for secret cell active state. Otherwise size is going to be different.
            '& .MuiSelect-select': { p: '10px 15px' },
            '& fieldset': { border: 'none' },
        },
    },
};

export type EnvironmentVariableTableRow = InputEnvironmentVariable & {
    id: GridRowId;
    isNew: boolean;
};

export type EnvironmentVariablesProps = {
    applicationId: string;
    currentMicroservice: MicroserviceStore;
};

// TODO: TYPO: Variables = Variable
export const EnvironmentVariablesSection = ({ applicationId, currentMicroservice }: EnvironmentVariablesProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const [envVariableTableRows, setEnvVariableTableRows] = useState<EnvironmentVariableTableRow[]>([]);
    const [selectedRowIds, setSelectedRowIds] = useState<GridRowModel[]>([]);
    const [rowMode, setRowMode] = useState<GridRowModesModel>({});
    const [disableAddButton, setDisableAddButton] = useState(false);
    const [restartInfoBoxIsOpen, setRestartInfoBoxIsOpen] = useState(false);

    const microserviceId = currentMicroservice.id;
    const microserviceEnvironment = currentMicroservice.environment;
    const microserviceName = currentMicroservice.name;

    useEffect(() => {
        fetchAndUpdateEnvVariableList();
    }, []);

    const fetchAndUpdateEnvVariableList = async () => {
        try {
            const result = await getEnvironmentVariables(applicationId, microserviceEnvironment, microserviceId);
            createDataTableObj(result.data);
        } catch (error) {
            enqueueSnackbar(`Could not fetch environment variables. ${error}`, { variant: 'error' });
        }
    };

    const createDataTableObj = (envVariables: InputEnvironmentVariable[]): void => {
        const rows = envVariables.map(envVariable => {
            return {
                id: envVariable.name,
                name: envVariable.name,
                value: envVariable.value,
                isSecret: envVariable.isSecret
            } as EnvironmentVariableTableRow;
        });

        setEnvVariableTableRows(rows);
    };

    const validateEnvVariable = (envVariable: EnvironmentVariableTableRow): boolean => {
        if (envVariable.name.trim() === '' || envVariable.value.trim() === '') {
            enqueueSnackbar('You cant have an empty name or value.', { variant: 'error' });
            return false;
        }

        if (envVariableTableRows.some(row => row.name === envVariable.name && row.id !== envVariable.id)) {
            enqueueSnackbar('You cant have duplicate names.', { variant: 'error' });
            return false;
        }

        return true;
    };

    const ignoreRowModifications = (id: GridRowId) => {
        setRowMode({
            ...rowMode,
            [id]: { mode: GridRowModes.View, ignoreModifications: true }
        });

        const editedRow = envVariableTableRows.find(row => row.id === id);

        if (editedRow!.isNew) {
            setEnvVariableTableRows(envVariableTableRows.filter(row => row.id !== id));
        }
    };

    const processRowUpdate = async (newRow: GridRowModel) => {
        setDisableAddButton(false);

        const updatedRow = { ...newRow, isNew: false };
        const oldRow = envVariableTableRows.find(row => row.id === updatedRow.id);

        if (oldRow?.name === updatedRow.name && oldRow!.value === updatedRow.value && oldRow!.isSecret === updatedRow.isSecret) {
            ignoreRowModifications(updatedRow.id);
            return;
        }

        if (!validateEnvVariable(updatedRow)) {
            ignoreRowModifications(updatedRow.id);
            return;
        }

        const updatedEnvVariable = envVariableTableRows.map(row => (row.id === newRow.id ? updatedRow : row));

        const result = await updateEnvironmentVariables(applicationId, microserviceEnvironment, microserviceId, updatedEnvVariable);

        if (result) {
            setEnvVariableTableRows(updatedEnvVariable);
            setRestartInfoBoxIsOpen(true);
            enqueueSnackbar(`Environment variable ${newRow.isNew ? 'added' : 'updated'}.`);
        } else {
            enqueueSnackbar('Could not update environment variable.', { variant: 'error' });
        }

        return updatedRow;
    };

    const handleEnvVariableAdd = () => {
        setDisableAddButton(true);

        // Generate a random id just for the new row.
        const temporaryId = Math.random().toString(16).slice(2);

        const newEnvVariable = {
            id: temporaryId,
            name: '',
            value: '',
            isSecret: false,
            isNew: true,
        };

        const updateChangedRows = [...envVariableTableRows, newEnvVariable];
        setEnvVariableTableRows(updateChangedRows);

        setRowMode(prevRowMode => ({
            ...prevRowMode,
            [temporaryId]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    const handleEnvVariableDelete = async () => {
        const remainingEnvVariables = envVariableTableRows.filter(envVariable => !selectedRowIds.includes(envVariable.id));

        const result = await updateEnvironmentVariables(applicationId, microserviceEnvironment, microserviceId, remainingEnvVariables);

        if (result) {
            envVariableTableRows.filter(envVariable => {
                if (selectedRowIds.includes(envVariable.id)) {
                    enqueueSnackbar(`'${envVariable.name}' variable has been deleted.`);
                }
            });

            setEnvVariableTableRows(remainingEnvVariables);
        } else {
            enqueueSnackbar('File not deleted. Please try again.', { variant: 'error' });
        }
    };

    // TODO: This is reused. consider moving
    const configMapPrefix = `${microserviceEnvironment.toLowerCase()}-${microserviceName.toLowerCase()}`;

    const handleSecretEnvVariableDownload = () => {
        const secretName = `${configMapPrefix}-secret-env-variables`;
        const href = `${getServerUrlPrefix()}/live/application/${applicationId}/secret/${secretName}?download=1&fileType=yaml`;
        enqueueSnackbar(`'${secretName}.yaml' has been downloaded.`);
        window.open(href, '_blank');
    };

    const handleEnvVariableDownload = () => {
        const configMapName = `${configMapPrefix}-env-variables`;
        const href = `${getServerUrlPrefix()}/live/application/${applicationId}/configmap/${configMapName}?download=1&fileType=yaml`;
        enqueueSnackbar(`'${configMapName}.yaml' has been downloaded.`);
        window.open(href, '_blank');
    };

    const noEnvVariables = envVariableTableRows.length === 0;
    const noSecretEnvVariables = envVariableTableRows.filter(envVariable => envVariable.isSecret).length === 0;
    const noPublicEnvVariables = envVariableTableRows.filter(envVariable => !envVariable.isSecret).length === 0;

    return (
        <>
            <Accordion id='environment-variables' title='Environment Variables' defaultExpanded>
                <Box sx={styles.buttonWrapper}>
                    <Button
                        label='Add new variable row'
                        disabled={disableAddButton}
                        startWithIcon='AddCircle'
                        onClick={handleEnvVariableAdd}
                    />
                    <Button
                        label='Delete Variable(s)'
                        disabled={!selectedRowIds.length || noEnvVariables}
                        startWithIcon='DeleteRounded'
                        onClick={handleEnvVariableDelete}
                    />
                    <Button
                        label='Download secret env-variables yaml'
                        disabled={noSecretEnvVariables}
                        startWithIcon='DownloadRounded'
                        onClick={handleSecretEnvVariableDownload}
                    />
                    <Button
                        label='Download env-variables yaml'
                        disabled={noPublicEnvVariables}
                        startWithIcon='DownloadRounded'
                        onClick={handleEnvVariableDownload}
                    />
                </Box>

                <RestartInfoBox microserviceName={microserviceName} isOpen={restartInfoBoxIsOpen} onDismissed={() => setRestartInfoBoxIsOpen(false)} />

                {noEnvVariables ?
                    <EmptyDataTable
                        title='No environment variables yet...'
                        description={`To add your first environment variable, select 'add variable'. Provide a name, value and set its secrecy.`}
                        label='Add Variable'
                        handleOnClick={handleEnvVariableAdd}
                    /> :
                    <DataGridWrapper>
                        <DataGridPro
                            {...dataGridDefaultProps}
                            rows={envVariableTableRows}
                            columns={envVariableColumns}
                            checkboxSelection
                            selectionModel={selectedRowIds}
                            onSelectionModelChange={setSelectedRowIds}
                            editMode='row'
                            rowModesModel={rowMode}
                            onRowModesModelChange={setRowMode}
                            processRowUpdate={processRowUpdate}
                            onProcessRowUpdateError={error => console.log(error)}
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                            sx={styles.dataTable}
                        />
                    </DataGridWrapper>
                }
            </Accordion>
        </>
    );
};

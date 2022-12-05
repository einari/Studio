// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import {
    getEnvironmentVariables,
    InputEnvironmentVariable,
    updateEnvironmentVariables,
} from '../../api/api';

import { ButtonText } from '../../theme/buttonText';
import { DropDownMenu } from '../../theme/dropDownMenu';
import { HttpResponseApplication } from '../../api/application';

type Props = {
    environment: string
    application: HttpResponseApplication
};

export const EnvironmentVariablesView: React.FunctionComponent<Props> = (props) => {
    const _props = props!;
    const { microserviceId } = useParams() as any;
    const { enqueueSnackbar } = useSnackbar();

    const applicationId = _props.application.id;
    const environment = _props.environment;
    const [loaded, setLoaded] = useState(false);
    const [currentData, setCurrentData] = useState([] as InputEnvironmentVariable[]);
    const [originalData, setOriginalData] = useState([] as InputEnvironmentVariable[]);


    useEffect(() => {
        Promise.all([
            getEnvironmentVariables(applicationId, environment, microserviceId)
        ]).then(values => {
            // Order by name to avoid random sort order
            const data = values[0].data.sort((env1, env2) => env1.name > env2.name ? 1 : -1);
            // Spreading does not work
            setCurrentData(JSON.parse(JSON.stringify(data)));
            setOriginalData(JSON.parse(JSON.stringify(data)));
            setLoaded(true);
        });
    }, []);

    if (!loaded) {
        return null;
    }

    const isSecretOptions = [
        {
            value: 'no',
            displayValue: 'no'
        },
        {
            value: 'yes',
            displayValue: 'yes'
        }
    ];

    const items: any[] = currentData.map((item, index) => {
        const key = `item-${index}`;
        const isSecret = item.isSecret ? 'yes' : 'no';
        return (
            <TableRow key={key}>
                <TableCell align="left">
                    <TextField
                        id={`name-${index}`}
                        required
                        fullWidth={true}
                        variant='outlined'
                        value={item.name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const newValue = event.target.value!;
                            const data = currentData;
                            data[index].name = newValue;
                            setCurrentData([...data]);
                        }}
                    />
                </TableCell>
                <TableCell align="left">
                    <TextField
                        id={`value-${index}`}
                        required
                        fullWidth={true}
                        variant='outlined'
                        value={item.value}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const newValue = event.target.value!;
                            const data = currentData;
                            data[index].value = newValue;
                            setCurrentData([...data]);
                        }}
                    />
                </TableCell>
                <TableCell align="right">
                    <DropDownMenu items={isSecretOptions} value={isSecret} onChange={(event: SelectChangeEvent<string>) => {
                        const newValue = event.target.value;
                        const data = currentData;
                        data[index].isSecret = newValue === 'yes' ? true : false;
                        setCurrentData([...data]);
                    }}></DropDownMenu>
                </TableCell>
                <TableCell align="right">
                    <ButtonText
                        onClick={() => {
                            const data = currentData;
                            data.splice(index, 1);
                            setCurrentData([...data]);
                        }}
                    >Remove</ButtonText>
                </TableCell>
            </TableRow >
        );
    });

    return (
        <>
            <Typography variant='h1' my={2}>Environment Variables</Typography>

            <Box component={Paper} m={2}>
                <ButtonText
                    onClick={async () => {
                        const newItem: InputEnvironmentVariable = {
                            name: '',
                            value: '',
                            isSecret: false
                        };

                        setCurrentData([newItem, ...currentData]);
                    }}
                >Add</ButtonText>

                <ButtonText
                    onClick={async () => {
                        if (JSON.stringify(originalData) === JSON.stringify(currentData)) {
                            enqueueSnackbar('No changes detected', { variant: 'info' });
                            return;
                        }

                        const allValid = currentData.filter(item => {
                            if (item.name === '') {
                                return true;
                            }
                            if (item.value === '') {
                                return true;
                            }
                            return false;
                        });
                        if (allValid.length !== 0) {
                            enqueueSnackbar('You cant have an empty name or value', { variant: 'error' });
                            return;
                        }

                        const uniqueNames = currentData.map(item => item.name);
                        if ((new Set(uniqueNames)).size !== uniqueNames.length) {
                            enqueueSnackbar('You cant have duplicate names', { variant: 'error' });
                            return;
                        }

                        enqueueSnackbar('Saving as changes were detected', { variant: 'info' });

                        const success = await updateEnvironmentVariables(applicationId, environment, microserviceId, currentData);
                        if (!success) {
                            enqueueSnackbar('Environment variables are saved', { variant: 'error' });
                            return;
                        }

                        setOriginalData(JSON.parse(JSON.stringify(currentData)));
                        // TODO make it clear to trigger a restart
                        enqueueSnackbar('Environment variables are saved, you need to manually trigger a restart for them to take effect', { variant: 'info' });
                    }}
                >Save</ButtonText>


                <TableContainer>
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Value</TableCell>
                                <TableCell align="right">Is Secret</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    );
};
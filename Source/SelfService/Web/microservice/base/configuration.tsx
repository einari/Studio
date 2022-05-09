// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deleteConfigFile, getConfigFilesNamesList, getServerUrlPrefix, IngressURLWithCustomerTenantID, SimpleIngressPath, updateConfigFiles } from '../../api/api';
import { MicroserviceSimple } from '../../api/index';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSnackbar } from 'notistack';

import { ButtonText } from '../../theme/buttonText';
import { DownloadButton } from '../../theme/downloadButton';
import { DownloadButtons } from '../components/downloadButtons';
import ConfigFilesTable from './components/configFilesTable';
import { ConfigView } from './configView';
import { LiveIngressView } from './liveIngressView';
import { SelectFileModal } from '../../theme/selectFileModal';
import { SelectFileConfirmationModal } from '../../theme/selectFileConfirmationModal';


export type ConfigurationProps = {
    applicationId: string
    environment: string
    microserviceId: string
    msName: string
    ingressUrls: IngressURLWithCustomerTenantID[]
    ingressPaths: SimpleIngressPath[]
    ms: MicroserviceSimple
    onClick: () => void
};


const styles = {
    base: {
        '& .MuiTypography-body1': {
            color: 'black',
            align: 'center'
        }
    },
    divider: {
        backgroundColor: '#3B3D48'
    }
};

const MAX_CONFIGMAP_ENTRY_SIZE = 3145728;


export const Configuration: React.FunctionComponent<ConfigurationProps> = (props: ConfigurationProps) => {
    const [filesNamesList, setFilesNamesList] = useState<string[]>([]);
    const [configFileModalVisibility, setConfigFileModalVisibility] = useState<boolean>(false);

    const [file, setFile] = useState<File>(new File([], ''));
    const [validFile, setvalidFile] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>(new FormData());
    const { enqueueSnackbar } = useSnackbar();

    // This is reused. consider moving
    const configMapPrefix = `${props.environment.toLowerCase()}-${props.msName.toLowerCase()}`;




    useEffect(() => {
        fetchConfigFilesNamesList()
            .catch(console.error);;

    }, []);

    const fetchConfigFilesNamesList = async () => {
        const result = await getConfigFilesNamesList(props.applicationId, props.environment, props.microserviceId);

        if (!result.data) {
            window.alert(`Could not fetch config files`);
        }

        setFilesNamesList(result.data);
    };

    const deleteFileFromMicroservice = async (fileName: string) => {
        if (!fileName) {
            alert('filename not valid');
            return;
        }

        if(confirm(`Are you sure you want to delete ${fileName}?`)){
            await deleteConfigFile(props.applicationId, props.environment, props.microserviceId, fileName);

            fetchConfigFilesNamesList()
                .catch(console.error);
        }
    };

    const sizeValidation = (file): boolean => {
        if (file.size > MAX_CONFIGMAP_ENTRY_SIZE) {
            setvalidFile(false);
            enqueueSnackbar(`file cannot be larger than ${MAX_CONFIGMAP_ENTRY_SIZE} bytes. Please select another file`, { variant: 'error', persist: false });
            return false;
        }

        setvalidFile(true);
        return true;
    };

    const onFileSelect=(event)=>{
        const file = event.target.files[0];
        sizeValidation(file);

        setFile(file);
        setConfigFileModalVisibility(true);

    };

    const onFileAdd=async (event)=>{
        setFormData(new FormData(event.target as HTMLFormElement));
        console.log(new FormData(event.target as HTMLFormElement));
        const upsert = await updateConfigFiles(props.applicationId, props.environment, props.microserviceId, new FormData(event.target as HTMLFormElement));

        if(upsert.success === false) {
            enqueueSnackbar(upsert.error, { variant: 'error', persist: false });
            setvalidFile(false);
        }else {
            fetchConfigFilesNamesList();
        }
        setConfigFileModalVisibility(false);


    };

    return (
        <>
            <SelectFileConfirmationModal
                open={configFileModalVisibility}
                disableAdd={!validFile}
                fileSize={file.size}
                fileName={file.name}
                onCancel={()=>{
                    setConfigFileModalVisibility(false);
                }}
                onAdd={()=>{
                    const event = new Event('submit', {bubbles: true,   cancelable: false});

                    document?.getElementById('config-file-selector-form')?.dispatchEvent(event);
                }}/>
            <Box ml={2}>
                <ConfigView microservice={props.ms} />
            </Box>
            <Divider sx={styles.divider} />
            <Box ml={2}>
                <LiveIngressView urls={props.ingressUrls} paths={props.ingressPaths} />
            </Box>
            <Box ml={2}>
                <ButtonText
                    onClick={props.onClick}
                >Manage environment variables</ButtonText>

                <DownloadButtons
                    environment={props.environment}
                    microserviceName={props.msName}
                    applicationId={props.applicationId}
                />
            </Box>
            <Divider sx={styles.divider} />
            <Box ml={2}>
                <h2>Configuration files</h2>
                <Grid container spacing={3}>
                    <Grid item>
                        <ButtonText
                            startIcon={<AddCircleIcon />}
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                console.log('visility', configFileModalVisibility);
                                // NOT WORKING TO CHANGE V
                                // setConfigFileModalVisibility(true);
                                document?.getElementById('file-selector')?.click();

                            }}
                        >
                            Add files
                        </ButtonText>
                    </Grid>
                    <Grid item>
                        <DownloadButton
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                const configMapName = `${configMapPrefix}-config-files`;
                                const href = `${getServerUrlPrefix()}/live/application/${props.applicationId}/configmap/${configMapName}?download=1&fileType=yaml`;
                                window.open(href, '_blank');
                            }}
                        >
                            Download config files yaml
                        </DownloadButton>
                    </Grid>
                    <form method="put" id="config-file-selector-form" hidden onSubmit={onFileAdd}>
                        <input type="file" id="file-selector" name='file' onChange={onFileSelect} />
                        <input type="submit" id="file-submit" value="Submit" />
                    </form>

                </Grid>
                <ConfigFilesTable filesNames={filesNamesList} onDeleteFileClick={deleteFileFromMicroservice}></ConfigFilesTable>
                <Divider style={{ backgroundColor: '#3B3D48', marginTop: '40px', marginBottom: '20px' }} />
            </Box>
        </>
    );
};
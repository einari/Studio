// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useSnackbar } from 'notistack';

import { Typography } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';

import { Guid } from '@dolittle/rudiments';
import { Button, Form, Link, LoadingSpinner, Tooltip, Input } from '@dolittle/design-system';

import { saveSimpleMicroservice } from '../stores/microservice';

import { MicroserviceSimple, MicroserviceFormParameters } from '../api/index';
import { getLatestRuntimeInfo, getRuntimes } from '../api/api';
import { HttpResponseApplication } from '../api/application';

import { ConfigurationSetupField, ContainerImageField, PublicUrlField, HasM3ConnectorField } from './components/form';
import { getRuntimeNumberFromString } from './helpers';

const styles = {
    form: {
        'mt': 4.5,
        'ml': 3,
        '& .MuiFormControl-root': {
            my: 1
        },
        '.MuiFormControlLabel-root': {
            ml: 0
        }
    },
    formSections: {
        'mb': 4,
        'display': 'flex',
        'flexDirection': 'column',
        '&:last-child': {
            mb: 0
        }
    }
};

const runtimeDescription = `By using the Dolittle runtime you'll have access to storage through event sourcing and be able to 
communicate with other microservices through the event horizon with the Dolittle SDK.`;

const portDescription = `By default, your mircroservice will be hosted on port 80 within the secure Dolittle cluster, 
but this can be overridden if your image requires it.`;

const EntrypointDescription = () =>
    <>
        If you would like to override your container image ENTRYPOINT,
        you can do so in this field. You can find more information on ENTRYPOINTS and CMD ARGUMENETS <Link
            href='https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact'
            target
            ariaLabel='Understand how CMD and ENTRYPOINT interact which opens in a new window.'
            message='here'
        />.
    </>;

const PublicUrlFieldDescription = () =>
    <>
        Dolittle will generate a public URL for you. If you would like to specify a subpath, please enter one here. If you would
        like custom handling of the path and subpaths, please reach out to <Link href='#' message='Dolittle support' /> after you&#39;ve deployed the service.
    </>;

type CreateMicroserviceProps = {
    application: HttpResponseApplication;
    environment: string;
};

export const CreateMicroservice = ({ application, environment }: CreateMicroserviceProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [headCommandArgs, setHeadCommandArgs] = useState<string[]>([]);
    const [showPublicUrlInfo, setShowPublicUrlInfo] = useState(false);
    const [showM3ConnectorInfo, setShowM3ConnectorInfo] = useState(false);

    const environmentInfo = application.environments.find(env => env.name === environment)!;
    const hasM3ConnectorOption = environmentInfo?.connections?.m3Connector || false;
    const latestRuntimeNumber = getRuntimeNumberFromString(getLatestRuntimeInfo().image);
    const runtimeNumberSelections = [
        ...getRuntimes().map(runtimeInfo => ({ value: getRuntimeNumberFromString(runtimeInfo.image) })), { value: 'None' }
    ];

    const handleCreateMicroservice = async (values: MicroserviceFormParameters) => {
        setIsLoading(true);

        const microserviceId = Guid.create().toString();
        const { microserviceName, headImage, headPort, runtimeVersion, isPublic, ingressPath, entrypoint, hasM3Connector } = values;

        const newMicroservice: MicroserviceSimple = {
            dolittle: {
                applicationId: application.id,
                customerId: application.customerId,
                microserviceId
            },
            name: microserviceName,
            kind: 'simple',
            environment,
            extra: {
                headImage,
                headPort,
                runtimeImage: runtimeVersion.toLowerCase(),
                isPublic,
                ingress: {
                    path: '/' + ingressPath,
                    pathType: 'Prefix'
                },
                headCommand: {
                    command: entrypoint.split(' '),
                    // Remove empty strings/values from array
                    args: headCommandArgs.filter(entry => entry.trim() !== '')
                },
                connections: {
                    m3Connector: hasM3Connector
                }
            }
        };

        try {
            await saveSimpleMicroservice(newMicroservice);
            const href = `/microservices/application/${application.id}/${environment}/view/${newMicroservice.dolittle.microserviceId}`;
            history.push(href);
        } catch (e: unknown) {
            const message = (e instanceof Error) ? e.message : 'Something went wrong when saving microservice.';
            enqueueSnackbar(message, { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <>
            <Typography variant='h1'>Deploy Base Microservice</Typography>

            <Form<MicroserviceFormParameters>
                initialValues={{
                    microserviceName: '',
                    developmentEnvironment: environment,
                    runtimeVersion: latestRuntimeNumber,
                    headImage: '',
                    headPort: 80,
                    entrypoint: '',
                    isPublic: false,
                    ingressPath: '',
                    hasM3Connector: false
                }}
                sx={styles.form}
                onSubmit={handleCreateMicroservice}
            >
                <ConfigurationSetupField
                    options={runtimeNumberSelections}
                    tooltipTitle='Runtime'
                    tooltipText={runtimeDescription}
                    sx={styles.formSections}
                />

                <ContainerImageField
                    cmdArgs={headCommandArgs}
                    setCmdArgs={setHeadCommandArgs}
                    tooltipImageTitle='Image Name'
                    tooltipImageText='Please provide the container image name for your microservice.'
                    tooltipPortTitle='Port'
                    tooltipPortText={portDescription}
                    tooltipEntryTitle='Entrypoint'
                    tooltipEntryText={<EntrypointDescription />}
                    sx={styles.formSections}
                />

                <PublicUrlField
                    hasPublicUrl={showPublicUrlInfo}
                    setHasPublicUrl={() => setShowPublicUrlInfo(!showPublicUrlInfo)}
                    tooltipTitle='PATH'
                    tooltipText={<PublicUrlFieldDescription />}
                    sx={styles.formSections}
                />

                {hasM3ConnectorOption &&
                    <HasM3ConnectorField
                        hasM3Connector={showM3ConnectorInfo}
                        setHasM3Connector={() => setShowM3ConnectorInfo(!showM3ConnectorInfo)}
                        sx={styles.formSections}
                    />
                }

                <Button
                    variant='filled'
                    label='Deploy microservice'
                    size='medium'
                    type='submit'
                    startWithIcon={<RocketLaunch />}
                    sx={{ mt: 1 }}
                />
            </Form>
        </>
    );
};

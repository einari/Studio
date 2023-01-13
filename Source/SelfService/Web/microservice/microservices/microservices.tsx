// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';

import { HttpResponseApplication } from '../../api/application';

import { useReadable } from 'use-svelte-store';
import { canEditMicroservices, microservices } from '../../stores/microservice';

import { Typography } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';

import { Button, LoadingSpinner } from '@dolittle/design-system';

import { NoMicroservices } from './noMicroservices';
import { MicroserviceTable, MicroserviceObject } from './microservicesTable';

type MicroserviceProps = {
    environment: string;
    application: HttpResponseApplication;
};

export const Microservice = ({ environment, application }: MicroserviceProps) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const $microservices = useReadable(microservices) as MicroserviceObject[];

    const [hasMicroservices, setHasMicroservices] = useState(false);
    const [loading, setLoading] = useState(true);

    let tempEnvironments = application.environments.map(e => e.name);
    tempEnvironments = [...tempEnvironments, ...$microservices.map(item => item.environment)];

    const canEdit = canEditMicroservices(application.environments, environment);

    const newEnvironments = [...new Set(tempEnvironments)];
    const hasEnvironments = newEnvironments.length > 0;

    const filteredMicroservices = $microservices.filter(microservice => microservice.environment === environment);

    useEffect(() => {
        setHasMicroservices(filteredMicroservices.length > 0);
        setLoading(false);
    }, []);

    const handleCreateMicroservice = () => {
        if (!canEdit) {
            enqueueSnackbar('Currently disabled, please reach out via freshdesk or teams.', { variant: 'error' });
            return;
        }

        sessionStorage.setItem('microserviceCreate', 'true');
        const href = `/microservices/application/${application.id}/${environment}/create`;
        navigate(href);
    };

    const handleCreateEnvironment = () => {
        // TODO How to stop this if automation disabled, currently on the environment level
        const href = `/environment/application/${application.id}/create`;
        navigate(href);
    };

    if (loading) return <LoadingSpinner />;

    return (
        <>
            {!hasEnvironments && <Button label='Create New Environment' onClick={handleCreateEnvironment} />}

            <Typography variant='h1' sx={{ my: 2 }}>Microservices</Typography>

            {hasMicroservices ?
                <MicroserviceTable application={application} environment={environment} microservices={filteredMicroservices} /> :
                <NoMicroservices onCreate={() => handleCreateMicroservice()} />
            }

            {hasEnvironments && hasMicroservices &&
                <Button
                    label='Deploy New Microservice'
                    variant='fullwidth'
                    startWithIcon={<RocketLaunch />}
                    onClick={() => handleCreateMicroservice()}
                    sx={{ mt: 2.125 }}
                />
            }
        </>
    );
};

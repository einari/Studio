// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { ConfirmDialog } from '@dolittle/design-system';

import { restartMicroservice } from '../../api/api';

type MicroserviceRestartProps = {
    applicationId: string;
    environment: string;
    microserviceId: string;
    msName: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    handleSuccess?: (successResult: boolean) => void;
};

export const RestartMicroserviceDialog = ({ applicationId, environment, microserviceId, msName, open, setOpen, handleSuccess }: MicroserviceRestartProps) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (sessionStorage.getItem('microserviceRestart') === 'true') {
            enqueueSnackbar(`'${msName}' has been restarted.`);
            sessionStorage.setItem('microserviceRestart', 'false');
        }
    }, []);

    const restart = async () => {
        const response = await restartMicroservice(applicationId, environment, microserviceId);

        if (response) {
            handleSuccess?.(true);
            sessionStorage.setItem('microserviceRestart', 'true');
        } else {
            enqueueSnackbar('Failed to restart microservice.');
        }

        setOpen(false);
    };

    return (
        <ConfirmDialog
            id='restart-microservice-dialog'
            isOpen={open}
            title='Restart microservice?'
            description='Restarting will temporarily stop the microservice and restart it again. Your app will be unavailable during restart.'
            cancelText='Cancel'
            confirmText='Restart'
            handleCancel={() => setOpen(false)}
            handleConfirm={() => restart()}
        />
    );
};
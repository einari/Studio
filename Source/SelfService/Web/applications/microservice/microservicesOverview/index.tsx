// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useReadable } from 'use-svelte-store';
import { microservices } from '../../stores/microservice';

import { MicroserviceObject } from '../../../apis/solutions/api';
import { HttpResponseApplication } from '../../../apis/solutions/application';

import { Typography } from '@mui/material';

import { MicroservicesList } from './microservicesList/MicroservicesList';
import { NoMicroservices } from './noMicroservices';

export type MicroservicesOverviewIndexProps = {
    application: HttpResponseApplication;
};

export const MicroservicesOverviewIndex = ({ application }: MicroservicesOverviewIndexProps) => {
    const navigate = useNavigate();
    const $microservices = useReadable(microservices) as MicroserviceObject[];

    return (
        <>
            <Typography variant='h1' sx={{ my: 3 }}>Microservices</Typography>

            {$microservices.length > 0
                ? <MicroservicesList application={application} microservices={$microservices} />
                : <NoMicroservices onCreate={() => navigate(`/microservices/application/${application.id}/create`)} />
            }
        </>
    );
};
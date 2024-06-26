// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { Typography } from '@mui/material';

import { LoadingSpinner } from '@dolittle/design-system';

import { mergeMicroservicesFromGit, mergeMicroservicesFromK8s } from '../stores/microservice';

import { getMicroservicesWithPods } from '../../apis/solutions/api';
import { getApplication, HttpResponseApplication } from '../../apis/solutions/application';

import { WorkSpaceLayoutWithSidePanel } from '../../layout/workSpaceLayout';
import { MicroservicesOverviewIndex } from './microservicesOverview';
import { MicroserviceCreateIndex } from './microserviceCreate';
import { MicroserviceDetailsIndex } from './microserviceDetails';
import { RouteNotFound } from '../../components/notfound';

import { withRouteApplicationState } from '../../utils/withRouteApplicationState';

export const MicroservicesIndex = withRouteApplicationState(({ routeApplicationParams }) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [application, setApplication] = useState({} as HttpResponseApplication);
    const [isLoading, setIsLoading] = useState(true);

    const currentApplicationId = routeApplicationParams.applicationId;

    useEffect(() => {
        if (!currentApplicationId) {
            enqueueSnackbar('No application found with this ID.', { variant: 'error' });
            navigate('/applications');
            return;
        };

        Promise.all([
            getApplication(currentApplicationId),
            getMicroservicesWithPods(currentApplicationId),
        ])
            .then(values => {
                const applicationData = values[0];

                if (!applicationData.id) {
                    navigate('/problem');
                    return;
                }

                setApplication(applicationData);

                mergeMicroservicesFromGit(applicationData.microservices);
                mergeMicroservicesFromK8s(values[1].microservices);
            })
            .catch(() => {
                enqueueSnackbar('Failed getting data from the server.', { variant: 'error' });
                navigate('/applications');
            })
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <LoadingSpinner />;

    if (application.id === '') {
        return <Typography variant='h1' sx={{ m: 2 }}>Application not found.</Typography>;
    }

    return (
        <WorkSpaceLayoutWithSidePanel pageTitle='Microservices | Applications' sidePanelMode='applications'>
            <Routes>
                <Route path='/overview' element={<MicroservicesOverviewIndex application={application} />} />
                <Route path='/create' element={<MicroserviceCreateIndex application={application} />} />
                <Route path='view/:microserviceId/:environment' element={<MicroserviceDetailsIndex application={application} />} />
                <Route path='*' element={<RouteNotFound redirectUrl={'overview'} auto={true} />} />
            </Routes>
        </WorkSpaceLayoutWithSidePanel>
    );
});

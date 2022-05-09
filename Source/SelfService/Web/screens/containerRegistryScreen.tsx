// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';
import {
    Route,
    useHistory,
    Switch,
    generatePath
} from 'react-router-dom';

import { ShortInfoWithEnvironment } from '../api/api';
import { getDefaultMenu, LayoutWithSidebar } from '../layout/layoutWithSidebar';


import { RouteNotFound } from '../components/notfound';
import { PickEnvironment, isEnvironmentValidFromUri } from '../components/pickEnvironment';
import { TopNavBar } from '../components/topNavBar';
import {
    HttpResponseApplication,
    getApplications,
    getApplication,
    HttpResponseApplications,
} from '../api/application';
import { withRouteApplicationState } from './withRouteApplicationState';
import { ContainerRegistryContainer } from '../containerregistry/container';



export const ContainerRegistryScreen: React.FunctionComponent = withRouteApplicationState(({ routeApplicationParams }) => {
    const history = useHistory();
    const currentEnvironment = routeApplicationParams.environment;
    const currentApplicationId = routeApplicationParams.applicationId;

    const [application, setApplication] = useState({} as HttpResponseApplication);
    const [applications, setApplications] = useState([] as ShortInfoWithEnvironment[]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!currentEnvironment || !currentApplicationId) {
            return;
        }

        Promise.all([
            getApplications(),
            getApplication(currentApplicationId),
        ]).then(values => {
            const applicationsData = values[0] as HttpResponseApplications;
            const applicationData = values[1];
            if (!applicationData?.id) {
                const href = `/problem`;
                history.push(href);
                return;
            }

            // TODO this should be unique
            // TODO also when we have more than one application and more than one environment we should default to something.
            setApplications(applicationsData.applications);
            setApplication(applicationData);
            setLoaded(true);
        }).catch((error) => {
            console.log(error);
        });
    }, [currentApplicationId, currentEnvironment]);

    if (!loaded) {
        return null;
    }

    if (application.id === '') {
        return (
            <>
                <h1>Application with this environment not found</h1>
            </>
        );
    }

    if (!isEnvironmentValidFromUri(applications, currentApplicationId, currentEnvironment)) {
        return (
            <PickEnvironment
                applications={applications}
                application={application}
                redirectTo={'/documentation/application/:applicationId/:environment/overview'}
                openModal={true} />
        );
    }

    const nav = getDefaultMenu(history, application.id, currentEnvironment);

    const routes = [];

    const redirectUrl = generatePath('/containerregistry/application/:applicationId/:environment/overview', {
        applicationId: currentApplicationId,
        environment: currentEnvironment,
    });

    return (
        <LayoutWithSidebar navigation={nav}>
            <TopNavBar routes={routes} applications={applications} applicationId={currentApplicationId} environment={currentEnvironment} />

            <Switch>
                <Route path="/containerregistry/application/:applicationId/:environment/overview">
                    <ContainerRegistryContainer application={application} environment={currentEnvironment} />
                </Route>
                <RouteNotFound redirectUrl={redirectUrl} />
            </Switch>
        </LayoutWithSidebar >
    );
});
// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';
import {
    Route,
    Switch,
    useHistory,
    generatePath
} from 'react-router-dom';

import { getApplication, HttpResponseApplication } from '../api/application';
import { ViewCard } from '../backup/viewCard';
import { getMenuWithApplication, LayoutWithSidebar } from '../layout/layoutWithSidebar';
import { BreadCrumbContainer } from '../layout/breadcrumbs';
import { useRouteApplicationParams } from '../utils/route';
import { ListView } from '../backup/listView';
import { useGlobalContext } from '../stores/notifications';

type Props = {
    application?: HttpResponseApplication
};

export const BackupsScreen: React.FunctionComponent<Props> = (props) => {
    const history = useHistory();
    const { currentEnvironment } = useGlobalContext();

    const routeApplicationProps = useRouteApplicationParams();
    const applicationId = routeApplicationProps.applicationId;
    const [application, setApplication] = useState({} as HttpResponseApplication);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        Promise.all([
            getApplication(applicationId),
        ]).then(values => {
            const applicationData = values[0];
            if (!applicationData?.id) {
                const href = `/problem`;
                history.push(href);
                return;
            }

            setApplication(applicationData);
            setLoaded(true);
        });
    }, []);

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
    const environments = application.environments;
    const nav = getMenuWithApplication(history, application, currentEnvironment);

    const routes = [
        {
            path: '/backups/application/:applicationId',
            to: generatePath('/backups/application/:applicationId/overview', {
                applicationId: application.id,
            }),
            name: 'Backups'
        },
        {
            path: '/backups/application/:applicationId/overview',
            to: generatePath('/backups/application/:applicationId/overview', {
                applicationId: application.id,
            }),
            name: 'Overview',
        },
        {
            path: '/backups/application/:applicationId/:environment/list',
            to: generatePath('/backups/application/:applicationId/:environment/list', {
                applicationId: application.id,
                environment: currentEnvironment
            }),
            name: currentEnvironment,
        }
    ];
    return (
        <>
            <LayoutWithSidebar navigation={nav}>
                <div id="topNavBar" className="nav flex-container">
                    <div className="left flex-start">
                        <BreadCrumbContainer routes={routes} />
                    </div>
                </div>
                <Switch>
                    <Route exact path="/backups/application/:applicationId/overview">
                        <div className="serv">
                            <ul>
                                {environments.map((environment) => {
                                    return <li key={environment.name}>
                                        <ViewCard application={application} environment={environment.name} />
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </Route>
                    <Route exact path="/backups/application/:applicationId/:environment/list">
                        <ListView application={application} environment={currentEnvironment} />
                    </Route>
                    <Route>
                        <h1>Something has gone wrong: backups</h1>
                    </Route>
                </Switch>
            </LayoutWithSidebar>
        </>
    );
};

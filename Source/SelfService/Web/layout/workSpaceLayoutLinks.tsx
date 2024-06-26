// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useGlobalContext } from '../context/globalContext';

import { getPrimaryNavigationItems, getSecondaryNavigationItems, getSidePanelItems, LayoutProps, MenuListProps, MenuItemProps } from '@dolittle/design-system';

import { ApplicationChanger } from './applicationChanger';

const PrimaryNavigation = () => {
    const location = useLocation();
    const { currentApplicationId } = useGlobalContext();

    const primaryNavigationItems = [
        {
            label: 'home',
            selected: location.pathname.includes('/home'),
            overrides: {
                component: Link,
                to: '/home',
            },
        },
        {
            label: 'applications',
            selected: location.pathname.includes('/application/'),
            overrides: {
                component: Link,
                to: `/microservices/application/${currentApplicationId}/overview`,
            },
        },
        {
            label: 'integrations',
            selected: location.pathname.includes('/integrations'),
            overrides: {
                component: Link,
                to: '/integrations',
            },
        },
    ];

    return getPrimaryNavigationItems(primaryNavigationItems);
};

const SecondaryNavigation = () => {
    const { hasOneCustomer } = useGlobalContext();

    const secondaryNavigationItems: MenuItemProps[] = [
        {
            id: 'documentation',
            label: 'Documentation',
            icon: 'DescriptionRounded',
            overrides: {
                component: 'a',
                href: 'https://dolittle.io/docs/',
                target: '_blank',
            },
        },
        {
            id: 'log-out',
            label: 'Log out',
            icon: 'LogoutRounded',
            overrides: {
                component: 'a',
                href: '/.auth/cookies/logout',
                onClick: () => localStorage.clear(),
            },
        },
    ];

    if (!hasOneCustomer) {
        // Put before log out link if there is more than one customer.
        secondaryNavigationItems.splice(secondaryNavigationItems.length - 1, 0, {
            id: 'change-organization',
            label: 'Change organization',
            icon: 'SupervisedUserCircleRounded',
            overrides: {
                component: 'a',
                href: '/.auth/cookies/initiate',
                onClick: () => localStorage.clear(),
            },
        });
    }

    return getSecondaryNavigationItems(secondaryNavigationItems);
};

const SidePanelApplicationItems = () => {
    const location = useLocation();
    const { currentApplicationId } = useGlobalContext();

    const sidePanelItems: MenuListProps['listItems'] = [
        {
            label: 'Microservices',
            icon: 'HexagonRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: `/microservices/application/${currentApplicationId}/overview`,
                selected: location.pathname.includes('/microservices'),
            },
        },
        {
            label: 'Backups',
            icon: 'BackupRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: `/backups/application/${currentApplicationId}/overview`,
                selected: location.pathname.includes('/backups'),
            },
        },
        {
            label: 'Container Registry',
            icon: 'ContainerRegistry',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: `/containerregistry/application/${currentApplicationId}/overview`,
                selected: location.pathname.includes('/containerregistry'),
            },
        },
        {
            label: 'Logs',
            icon: 'TextSnippetRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: `/logs/application/${currentApplicationId}`,
                selected: location.pathname.includes('/logs'),
            },
        },
        {
            label: 'Setup',
            icon: 'FindInPageRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: `/setup/application/${currentApplicationId}/overview`,
                selected: location.pathname.includes('/setup'),
            },
        },
    ];

    return getSidePanelItems(sidePanelItems);
};

const SidePanelIntegrationItems = () => {
    const sidePanelItems: MenuListProps['listItems'] = [
        {
            label: 'ERP Connections',
            icon: 'PolylineRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/integrations/connections',
                selected: location.pathname.includes('/integrations'),
            },
        },
    ];

    return getSidePanelItems(sidePanelItems);
};

export const mainNavigationItems: LayoutProps['navigationBar'] = {
    logo: 'AigonixLightCube',
    primaryNavigationItems: <PrimaryNavigation />,
    selectionMenuItems: <ApplicationChanger />,
    secondaryNavigationItems: <SecondaryNavigation />,
};

export const applicationsSidePanel: LayoutProps['sidePanel'] = {
    sidePanelNavigationItems: <SidePanelApplicationItems />,
};

export const integrationsSidePanel: LayoutProps['sidePanel'] = {
    sidePanelNavigationItems: <SidePanelIntegrationItems />,
};

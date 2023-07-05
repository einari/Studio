// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { useState } from 'react';

import {
    DropdownMenuProps,
    ListProps,
    getPrimaryNavigationItems,
    getSecondaryNavigationItems,
    getSelectionMenuItems,
    getSidePanelItems,
} from '../../index';

import { Link } from '../../helpers/ReactRouter';

export const PrimaryNavigation = () => {
    const primaryNavigationItems = [
        {
            label: 'Primary 1',
            href: '/primary-1',
            overrides: {
                component: Link,
                to: '/primary-1',
            },
        },
        {
            label: 'Primary 2',
            href: '/primary-2',
            overrides: {
                component: Link,
                to: '/primary-2',
            },
        },
        {
            label: 'Primary 3',
            href: '/primary-3',
            overrides: {
                component: Link,
                to: '/primary-3',
            },
        },
    ];

    return getPrimaryNavigationItems(primaryNavigationItems);
};

export const SecondaryNavigation = () => {
    const secondaryNavigationItems: DropdownMenuProps['menuItems'] = [
        {
            id: 'secondary-1',
            label: 'Secondary 1',
            icon: 'DescriptionRounded',
            overrides: {
                component: Link,
                to: '/secondary-1',
            },
        },
        {
            id: 'secondary-2',
            label: 'Secondary 2',
            icon: 'SupervisedUserCircleRounded',
            overrides: {
                component: Link,
                to: '/secondary-2',
            },
        },
        {
            id: 'secondary-3',
            label: 'Secondary 3',
            icon: 'LogoutRounded',
            overrides: {
                component: Link,
                to: '/secondary-3',
            },
        },
    ];

    return getSecondaryNavigationItems(secondaryNavigationItems);
};

export const SelectionMenu = () => {
    const [selected, setSelected] = useState('Selection 1');

    const selectionMenuItems: DropdownMenuProps['menuItems'] = [
        {
            id: 'selection-1',
            label: 'Selection 1',
            icon: 'AigonixLightCube',
            onSelect: () => setSelected('Selection 1'),
        },
        {
            id: 'selection-2',
            label: 'Selection 2',
            onSelect: () => setSelected('Selection 2'),
        },
        {
            id: 'selection-3',
            label: 'Selection 3',
            icon: 'AddBoxRounded',
            onSelect: () => setSelected('Selection 3'),
        },
    ];

    return getSelectionMenuItems(selectionMenuItems, selected);
};

export const SidePanelNavigation = () => {
    const items: ListProps['listItems'] = [
        {
            label: 'Side panel link 1',
            icon: 'CheckRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/side-panel-link-1',
            },
        },
        {
            label: 'Side panel link 2',
            icon: 'SettingsRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/side-panel-link-2',
            },
        },
        {
            label: 'Side panel link 3',
            icon: 'HelpRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/side-panel-link-3',
            },
        },
        {
            label: 'Side panel link 4',
            icon: 'EditRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/side-panel-link-4',
            },
        },
        {
            label: 'Side panel link 5',
            icon: 'LogoutRounded',
            sx: { my: 1 },
            overrides: {
                component: Link,
                to: '/side-panel-link-5',
            },
        },
    ];

    return getSidePanelItems(items);
};

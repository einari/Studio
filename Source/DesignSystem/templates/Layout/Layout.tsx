// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Grid, SxProps } from '@mui/material';

import { NavigationBar, NavigationBarProps, SidePanel, SidePanelProps } from '@dolittle/design-system';

const styles: SxProps = {
    'minHeight': 'calc(100vh - 96px)',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': 1,
    'm': 4,
    'mt': 10.5,
    '& .MuiToolbar-root': { p: 0 },
};

/**
 * The props for a {@link Layout} component.
 */
export type LayoutProps = {
    /**
     * The navigation bar that will be displayed at the top of the layout.
     */
    navigationBar: NavigationBarProps;

    /**
     * The side panel that will be displayed on the left of the layout.
     */
    sidePanel?: SidePanelProps;

    /**
     * The main content of the layout.
     */
    children: React.ReactNode;

    /**
     * The sx prop lets you add custom styles to the component, overriding the styles defined by Material-UI.
     */
    sx?: SxProps;
};

/**
 * The layout component is the main component that contains the navigation bar and the side bar.
 * @param {LayoutProps} props - The {@link LayoutProps}.
 * @returns A {@link Layout} component.
 */
export const Layout = ({ navigationBar, sidePanel, children, sx }: LayoutProps) =>
    <Grid container sx={{ display: 'inline-flex', flexFlow: 'nowrap' }}>
        <NavigationBar {...navigationBar} />

        {sidePanel && <SidePanel {...sidePanel} />}

        <Grid item component='main' sx={{ ...styles, ...sx }}>
            {children}
        </Grid>
    </Grid>;

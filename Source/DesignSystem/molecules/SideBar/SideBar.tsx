// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useState } from 'react';

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

import { Icon } from '@dolittle/design-system';

import { Drawer } from './StyledCompenents';

/**
 * The props for a {@link SideBar} component.
 */
export type SideBarProps = {
    /**
     * The main links that will be displayed in the side bar.
     * @default undefined
     */
    primaryLinks?: React.ReactNode;

    /**
     * The secondary links that will be displayed in the side bar.
     * @default undefined
     */
    secondaryLinks?: React.ReactNode;
};

/**
 * The side bar is the left bar that contains the main navigation links and the secondary links.
 * @param {SideBarProps} props - The {@link SideBarProps} that contains the properties for the side bar.
 * @returns A {@link SideBar} component.
 */
export const SideBar = ({ primaryLinks, secondaryLinks }: SideBarProps) => {
    const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('isSidebarExpanded') === 'true') {
            setIsSideBarExpanded(true);
        }
    }, []);

    const handleSidebarToggle = () => {
        setIsSideBarExpanded(!isSideBarExpanded);
        sessionStorage.setItem('isSidebarExpanded', (!isSideBarExpanded).toString());
    };

    const styles = {
        list: {
            '& .MuiListItemText-root': {
                opacity: isSideBarExpanded ? 1 : 0,
            },
        },
    };

    return (
        <Drawer variant='permanent' open={isSideBarExpanded}>
            <Toolbar />

            <List sx={styles.list}>
                <ListItem disablePadding sx={{ minHeight: 64 }}>
                    <ListItemButton onClick={handleSidebarToggle}>
                        <ListItemIcon sx={{ color: 'text.primary' }}>
                            <Icon icon={isSideBarExpanded ? 'KeyboardDoubleArrowLeft' : 'KeyboardDoubleArrowRight'} />
                        </ListItemIcon>

                        <ListItemText primary={isSideBarExpanded ? 'Collapse' : 'Expand'} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItemButton>
                </ListItem>

                <Divider />
                {primaryLinks}

                <Divider />
                {secondaryLinks}
            </List>
        </Drawer>
    );
};

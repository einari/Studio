// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Box, CircularProgress, SxProps, Typography } from '@mui/material';

import { Icon, SvgIconsDefinition } from '@dolittle/design-system';

type ConnectionStatusCondition = {
    color: 'text.secondary' | 'success.main' | 'warning.main' | 'error.main' | 'info.main';
    icon: SvgIconsDefinition['icon'] | null;
};

const connectionStatusCondition = (status: string): ConnectionStatusCondition => {
    if (status === 'running' || status === 'connected') {
        return { color: 'success.main', icon: 'CheckCircleRounded' };
    } else if (status === 'pending') {
        return { color: 'warning.main', icon: 'WarningRounded' };
    } else if (status === 'waiting') {
        return { color: 'text.secondary', icon: null };
    } else if (status === 'failed' || status === 'failing') {
        return { color: 'error.main', icon: 'ErrorRounded' };
    }

    return { color: 'text.secondary', icon: 'HelpRounded' };
};

/**
 * The props for a {@link StatusIndicator} component.
 */
export type StatusIndicatorProps = {
    /**
     * The status to show.
     */
    status: string;

    /**
     * The label to show.
     *
     * If not provided, the status will be used as the label.
     * @default status
     */
    label?: string;

    /**
     * Whether to show the status as a filled variant.
     * @default false
     */
    variantFilled?: boolean;

    sx?: SxProps;
};

/**
 * A component that shows a status or progress indicator.
 * @param {StatusIndicatorProps} props - The {@link StatusIndicatorProps}.
 * @returns A {@link StatusIndicator} component.
 */
export const StatusIndicator = ({ label, status, variantFilled, sx }: StatusIndicatorProps) => {
    const { color, icon } = connectionStatusCondition(status.toLowerCase());

    const styles = {
        variantText: {
            color,
            display: 'inline-flex',
            alignItems: 'center',
            ...sx,
        },
        variantFilled: {
            minWidth: 64,
            py: 0.75,
            px: 2,
            color: 'background.paper',
            backgroundColor: color,
            borderRadius: '4px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx,
        },
    };

    return (
        <Box sx={variantFilled ? styles.variantFilled : styles.variantText}>
            {icon && <Icon icon={icon} />}
            {status === 'waiting' && <CircularProgress color='inherit' size={16} />}
            <Typography variant='button' sx={{ ml: 1 }}>{label ?? status}</Typography>
        </Box>
    );
};
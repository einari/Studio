// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Box, Tooltip } from '@mui/material';

const fmt = (summary?: number, digits?: number) => {
    if (summary === undefined) {
        return 'N/A';
    }

    if (digits !== undefined) {
        return summary.toFixed(digits);
    }

    return summary.toString();
};

export type SummaryProps = {
    now?: number;
    avg?: number;
    max?: number;
    period: string;
    description?: string;
    digits?: number;
    unit?: string;
};

export const Summary = (props: SummaryProps) => {
    const description = props.description ?? '';

    return (
        <Box sx={{whiteSpace: 'pre'}}>
            <Tooltip title={`Average ${description} ${props.period}`}>
                <span>{fmt(props.avg, props.digits)}</span>
            </Tooltip>
            {' | '}
            <Tooltip title={`Maximum ${description} ${props.period}`}>
                <span>{fmt(props.max, props.digits)}</span>
            </Tooltip>
            {' | '}
            <Tooltip title={`Current ${description}`}>
                <span>{fmt(props.now, props.digits)}</span>
            </Tooltip>
            { props.unit && ' ' + props.unit }
        </Box>
    );
};
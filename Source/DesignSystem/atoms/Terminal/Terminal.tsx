// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useEffect, useMemo } from 'react';
import { ITerminalOptions } from 'xterm';

import { useTheme, Box, Theme } from '@mui/material';

import { useTerminal } from './useTerminal';
import { useStreams, TerminalStreams } from './useStreams';

/**
 * The props for a {@link Terminal} component.
 */
export type TerminalProps = {
} & TerminalStreams;

/**
 * An XTerm terminal component.
 * @param props The {@link TerminalProps} for the component instance.
 * @returns The rendered {@link JSX.Element}.
 */
export const Terminal = (props: TerminalProps) => {
    const theme = useTheme();

    const options = useMemo<ITerminalOptions>(() => ({
        ...mapTheme(theme),
    }), [theme]);

    const terminal = useTerminal(options);
    useStreams(props, terminal);

    return (
        <Box
            ref={terminal.containerRef}
            sx={{
                'height': '300px',
                '& .xterm .xterm-viewport': {
                    overscrollBehaviorY: 'none',
                },
            }}
        />
    );
};

const mapTheme = (theme: Theme): ITerminalOptions => {
    const font = theme.typography.body1;

    return {
        // fontFamily: font.fontFamily,
        // fontSize: fontSizeFrom(font.fontSize, theme.typography.htmlFontSize),
        // fontWeight: parseFloat(font.fontWeight as any) || parseFloat(theme.typography.fontWeightRegular as any) || undefined,
        // letterSpacing: 2,
        theme: {
            background: theme.palette.background.default,
        },
    };
};

const fontSizeFrom = (size: string | number | undefined, rem: number) => {
    if (size === undefined) {
        return rem;
    }

    if (typeof size === 'number') {
        return size;
    }

    if (size.endsWith('em')) {
        return parseFloat(size) * rem;
    }

    return parseFloat(size) ?? rem;
};

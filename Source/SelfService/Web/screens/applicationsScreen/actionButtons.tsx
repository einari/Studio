// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Box, Button, Link, Theme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const styles = {
    letterSpacing: '0.059rem',
    typography: 'body2',
    fontWeight: 500,
    mr: 8,
    color: (theme: Theme) => theme.palette.text.primary
};

export const ActionButtons = () => (
    <Box sx={{ mt: 12.5 }}>
        <Link href='/.auth/cookies/initiate' sx={{ textDecoration: 'none' }}>
            <Button startIcon={<ArrowBack />} sx={styles}>
                Select new customer
            </Button>
        </Link>

        <Link href={'/.auth/cookies/logout'} sx={{ textDecoration: 'none' }}>
            <Button sx={styles}>Log Out</Button>
        </Link>
    </Box>
);
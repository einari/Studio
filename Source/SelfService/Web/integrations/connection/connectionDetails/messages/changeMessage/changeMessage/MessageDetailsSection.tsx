// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { ContentSection, Input } from '@dolittle/design-system';

import { alphaNumericCharsRegex } from '../../../../../../utils/helpers/regex';

export const MessageDetailsSection = () =>
    <ContentSection hideHeader sx={{ p: 0, my: 3 }}>
        <Grid container gap={4}>
            <Stack spacing={3}>
                <Typography variant='subtitle2'>Provide a name for your message type</Typography>
                <Input id='name' label='Message Type Name' required pattern={{ value: alphaNumericCharsRegex, message: 'Can only contain characters or numbers' }} />
            </Stack>

            <Stack spacing={3}>
                <Typography variant='subtitle2'>Add a description for this message type</Typography>
                <Input id='description' label='Message Type Description' />
            </Stack>
        </Grid>
    </ContentSection>;

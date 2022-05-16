// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@fluentui/react/lib/Stack';
import { Text } from '@fluentui/react';
import { HttpResponseApplication } from '../api/application';
import { Typography } from '@mui/material';



const stackTokens = { childrenGap: 15 };

type Props = {
    environment: string
    application: HttpResponseApplication
};


export const MicroserviceEditScreen: React.FunctionComponent<Props> = (props) => {
    // TODO Get from application
    const customerId = 'TODO';
    const { microserviceId } = useParams() as any;
    const applicationId = props!.application.id;
    return (
        <>
            <Typography variant='h1' my={2}>Microservice Edit Screen</Typography>

            <Stack tokens={stackTokens}>
                <Text variant="xLarge" block>
                    customer: {customerId}
                </Text>
                <Text variant="xLarge" block>
                    application: {applicationId}
                </Text>
                <Text variant="xLarge" block>
                    microservice: {microserviceId}
                </Text>
            </Stack>
        </>
    );
};

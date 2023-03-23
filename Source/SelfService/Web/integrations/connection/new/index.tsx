// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Box, Typography } from '@mui/material';

import { AccordionList, AccordionListProps, Button } from '@dolittle/design-system';

import { Page } from '../../../components/layout/page';
import { MaxWidthTextBlock } from './components/MaxWidthTextBlock';
import { InitialSetupForm } from './components/initialSetupForm';
import { MetadataPublisherCredentials } from './components/MetadataPublisherCredentials';
import { IonServiceAccount } from './components/ionServiceAccount';
import { ConnectorBundle } from './components/connectorBundle';

const newConnectionDescription = `This process might take some time depending on access rights and working knowledge of
                    your organization's firewall and M3 system. You can always save and create the connection setup details then come back at a later time to finish.`;

export const NewConnectionView = () => {
    const accordionListProps: AccordionListProps = {
        singleExpandMode: true,
        items: [
            {
                id: 'hostConnectorBundle',
                title: 'Host Your Connector Bundle',
                children: <ConnectorBundle />,
                sx: { mt: 8 },
            },
            {
                id: 'metadataPublisherCredentials',
                title: 'Metadata Publisher Credentials',
                children: <MetadataPublisherCredentials />,
                sx: { mt: 8 },
            },
            {
                id: 'ionCredentials',
                title: 'ION Service Account Credentials',
                children: <IonServiceAccount />,
                sx: { mt: 8 },
            }
        ],
    };

    return (
        <Page title='New M3 Connection'>
            <Box sx={{ maxWidth: 814, mt: 7, ml: 1 }}>
                <Typography variant='subtitle1'>{`Let's get your M3 connector up and running...`}</Typography>

                <Box sx={{ ml: 3 }}>

                    <Box sx={{ mt: 3, ml: 3 }}>
                        <MaxWidthTextBlock>{newConnectionDescription}</MaxWidthTextBlock>
                        <InitialSetupForm />
                    </Box>

                    <AccordionList  {...accordionListProps} />

                    <Box sx={{ my: 5 }}>
                        <Button
                            label='Save connection'
                            disabled
                            onClick={() => { }}
                            sx={{ mr: 3 }}
                        />

                        <Button
                            label='Start Mapping Data'
                            variant='filled'
                            disabled
                            href='#'
                        />
                    </Box>
                </Box>

            </Box>
        </Page>
    );
};

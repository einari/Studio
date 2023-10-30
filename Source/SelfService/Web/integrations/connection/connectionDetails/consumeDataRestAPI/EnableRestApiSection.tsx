// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Button, ContentSection, ContentParagraph } from '@dolittle/design-system';

import { RestApiServiceStatus } from '../../../../apis/integrations/generated';

export type EnableRestApiSectionProps = {
    onEnableRestApi: () => void;
    status: RestApiServiceStatus;
    isEnabling: boolean;
};

export const EnableRestApiSection = ({ status, onEnableRestApi, isEnabling }: EnableRestApiSectionProps) =>
    <ContentSection title='Enable Rest API'>
        <ContentParagraph>
            To enable the Rest API service, press the &quot;Enable REST API&quot; button. The first time you enable the Rest API may take a few minutes to set up and deploy your dedicated service.
        </ContentParagraph>
        <Button label='Enable Rest Api' variant='fullwidth' startWithIcon='RocketLaunch' onClick={() => onEnableRestApi?.()} disabled={status !== 'Off' || isEnabling} />
    </ContentSection>;

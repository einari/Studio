// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


// TODO how to load the logs?
// TODO validate the data
// TODO change action button from create to save

import React from 'react';

import { MicroserviceRawDataLogIngestor } from '../../../../api/solutions/index';
import { HttpResponseApplication } from '../../../../api/solutions/application';
import { EditConfig } from './editConfig';

type Props = {
    application: HttpResponseApplication
    environment: string
    ms: MicroserviceRawDataLogIngestor
};

export const Edit: React.FunctionComponent<Props> = (props) => {
    const _props = props!;
    const application = _props.application;
    const environment = _props.environment;
    const ms = _props.ms;

    return (
        <>
            <EditConfig ms={ms} application={application} environment={environment} />
        </>
    );
};

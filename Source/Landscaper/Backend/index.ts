// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import path from 'path';
import { startBackend } from '@shared/backend';

import { getSchema } from './schema';

(async () => {
    const schema = await getSchema();

    await startBackend({
        microserviceId: '15824a53-31bd-4634-8892-2331a8460a3b',
        prefix: '/_/landscaper',
        publicPath: path.join(__dirname, 'public'),
        port: 3004,
        dolittleRuntimePort: 50061,
        graphQLSchema: schema,
        defaultDatabaseName: 'landscaper',
        expressCallback: _ => {
        },
        dolittleCallback: _ => {
        }
    });
})();

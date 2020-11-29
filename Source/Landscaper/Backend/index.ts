// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import path from 'path';
import { startBackend } from '@shared/backend';

import { getSchema } from './schema';

import nconf from 'nconf';
import { create as createRoutes } from 'tinylicious/dist/routes';
import { TinyliciousResourcesFactory } from 'tinylicious/dist/resourcesFactory';
import { configureWebSocketServices } from '@fluidframework/server-lambdas';
import { TestClientManager } from '@fluidframework/server-test-utils';
import { DefaultMetricClient } from '@fluidframework/server-services-core';
import * as winston from 'winston';
import cors from 'cors';

(async () => {
    const schema = await getSchema();


    const config = nconf.file(path.join(__dirname, 'config.json'));
    const resourcesFactory = new TinyliciousResourcesFactory();
    const resources = await resourcesFactory.create(config);

    if (true) {
        await startBackend({
            microserviceId: '15824a53-31bd-4634-8892-2331a8460a3b',
            prefix: '/_/landscaper',
            publicPath: path.join(__dirname, 'public'),
            port: 3000,
            dolittleRuntimePort: 50061,
            graphQLSchema: schema,
            defaultDatabaseName: 'landscaper',
            defaultEventStoreDatabaseName: 'event_store_landscaper',
            expressCallback: _ => {
                _.use(cors());

                // Bind routes
                const routes = createRoutes(
                    config,
                    resources.mongoManager,
                    resources.storage);

                _.use(routes.storage);
                _.use(routes.ordering);

                const webServer = resources.webServerFactory.create(_);

                configureWebSocketServices(
                    webServer.webSocketServer,
                    resources.orderManager,
                    resources.tenantManager,
                    resources.storage,
                    resources.contentCollection,
                    new TestClientManager(),
                    new DefaultMetricClient(),
                    winston
                );

                return webServer.httpServer as any;
            },
            dolittleCallback: _ => {
            }
        });
    }
})();

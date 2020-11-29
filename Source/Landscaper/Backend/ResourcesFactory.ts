// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import fs from 'fs';
import { LocalOrdererManager } from '@fluidframework/server-local-server';
import { DocumentStorage } from '@fluidframework/server-services-shared';
import { MongoDatabaseManager, MongoManager } from '@fluidframework/server-services-core';
import * as utils from '@fluidframework/server-services-utils';
import * as bytes from 'bytes';
import * as git from 'isomorphic-git';
import { Provider } from 'nconf';
import socketIo from 'socket.io';
import { Historian } from '@fluidframework/server-services-client';
import winston from 'winston';
import { TinyliciousResources } from 'tinylicious/dist//resources';
import {
    DbFactory,
    PubSubPublisher,
    TaskMessageSender,
    TenantManager,
} from 'tinylicious/dist//services';

import { WebServerFactory } from './webServerFactory';

export class TinyliciousResourcesFactory implements utils.IResourcesFactory<TinyliciousResources> {
    public async create(config: Provider): Promise<TinyliciousResources> {
        // Pull in the default port off the config
        const port = utils.normalizePort(process.env.PORT || '3000');
        const maxSendMessageSize = bytes.parse(config.get('alfred:maxMessageSize'));
        const collectionNames = config.get('mongo:collectionNames');

        const tenantManager = new TenantManager(`http://localhost:${port}`);
        const dbFactory = new DbFactory();
        const taskMessageSender = new TaskMessageSender();
        const mongoManager = new MongoManager(dbFactory);
        const databaseManager = new MongoDatabaseManager(
            mongoManager,
            collectionNames.nodes,
            collectionNames.documents,
            collectionNames.deltas,
            collectionNames.scribeDeltas);
        const storage = new DocumentStorage(databaseManager, tenantManager, {} as any);
        const io = socketIo();
        const pubsub = new PubSubPublisher(io);
        const webServerFactory = new WebServerFactory(io);

        // Initialize isomorphic-git
        git.plugins.set('fs', fs);

        const orderManager = new LocalOrdererManager(
            storage,
            databaseManager,
            tenantManager,
            taskMessageSender,
            config.get('foreman:permissions'),
            maxSendMessageSize,
            async (tenantId: string) => {
                const url = `http://localhost:${port}/repos/${encodeURIComponent(tenantId)}`;
                return new Historian(url, false, false);
            },
            winston,
            undefined /* serviceConfiguration */,
            pubsub);

        // TODO would be nicer to just pass the mongoManager down
        const db = await mongoManager.getDatabase();
        const contentCollection = db.collection(collectionNames.content);

        return new TinyliciousResources(
            config,
            orderManager,
            tenantManager,
            storage,
            mongoManager,
            port,
            contentCollection,
            webServerFactory);
    }
}

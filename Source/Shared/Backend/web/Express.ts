// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import compression from 'compression';
import { GraphQLSchema } from 'graphql';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import http from 'http';

export type ExpressConfigCallback = (app: Express) => http.Server | undefined;

export async function initialize(prefix: string, publicPath: string, port: number, schema: GraphQLSchema, configCallback?: ExpressConfigCallback) {
    const requestSizeLimit = '50mb';
    const expressPort = process.env.PORT || port;
    let httpServer: http.Server | undefined;

    const app = express();
    app.set('port', expressPort);
    app.use(compression());
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: requestSizeLimit }));
    app.use(
        bodyParser.urlencoded({
            limit: requestSizeLimit,
            extended: false
        })
    );

    const server = new ApolloServer({
        schema
    });
    server.applyMiddleware({ app, path: `${prefix}/graphql` });

    if (configCallback) {
        httpServer = configCallback(app);
    }

    app.use(morgan('tiny'));
    app.use(prefix, express.static(publicPath));

    app.use((req, res) => {
        res.sendFile(`${publicPath}/index.html`);
    });

    if (httpServer) {
        httpServer.listen({ port: expressPort, hostname: '0.0.0.0' });
        httpServer.on('error', (error) => console.log(`Error '${error}'`));
        httpServer.on('listening', () => console.log(`Server listening on '${expressPort}'`));
    } else {
        app.listen({ port: expressPort, hostname: '0.0.0.0' });
        app.on('error', (error) => console.log(`Error '${error}'`));
        app.on('listening', () => console.log(`Server listening on '${expressPort}'`));
    }

    return app;
}

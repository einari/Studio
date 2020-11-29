// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const webpack = require('@shared/webpack');
module.exports = (env, argv) => {
    return webpack(env, argv, '/_/landscaper', config => {
        config.devServer.port = 9004;
        config.devServer.proxy['/documents'] = 'http://localhost:3000';
        config.devServer.proxy['/socket.io'] = {
            target: 'ws://localhost:3000',
            ws: true
        };
        config.devServer.proxy['/repos'] = 'http://localhost:3000';
        config.devServer.proxy['/tinylicious'] = 'http://localhost:3000';
        config.devServer.proxy['/socketjs-node'] = {
            target: 'ws://localhost:3000',
            ws: true
        };
    });
};

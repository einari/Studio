// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const path = require('path');

module.exports = (env, argv, basePath) => {
    const production = argv.mode === 'production';
    
    return {
        filename:
            production === true
                ? '[name].[chunkhash].bundle.js'
                : '[name].[hash].bundle.js',
        sourceMapFilename:
            production === true
                ? '[name].[chunkhash].bundle.map'
                : '[name].[hash].bundle.map',
        chunkFilename:
            production === true
                ? '[name].[chunkhash].chunk.js'
                : '[name].[hash].chunk.js',
        path: path.resolve(process.cwd(), 'wwwroot'),
        publicPath: basePath
    }
};
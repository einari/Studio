// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';

import { Bootstrapper, VersionInfo } from '@shared/web';

const version = require('../version.json') as VersionInfo;

import '@shared/styles/theme';
import './index.scss';

export default function App() {
    return (
        <>
        </>
    );
}

ReactDOM.render(
    <Bootstrapper name="Events" prefix="/_/events" version={version}>
        <App />
    </Bootstrapper>,
    document.getElementById('root')
);
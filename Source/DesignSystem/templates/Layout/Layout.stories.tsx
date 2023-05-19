// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { componentStories } from '@dolittle/design-system';

import { Layout } from './Layout';

import { DummyText } from '../../helpers/DummyContents';
import { Router, CurrentPath } from '../../helpers/ReactRouter';

const { metadata, createStory } = componentStories(Layout, {
    decorator: (Story) => (
        <Router>
            {Story()}
        </Router>
    ),
});

metadata.parameters = {
    controls: { include: [] },
};

metadata.args = {
    children: (
        <>
            <CurrentPath />
            <DummyText />
        </>
    ),
};

export default metadata;

export const Default = createStory();

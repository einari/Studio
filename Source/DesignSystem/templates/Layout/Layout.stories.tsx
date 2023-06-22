// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { componentStories, Layout } from '@dolittle/design-system';

import { Router, CurrentPath } from '../../helpers/ReactRouter';
import { primaryNavigationItems, secondaryNavigationItems, selectionMenuItems } from '../../helpers/DummyContents/DummyNavigationItems';

const { metadata, createStory } = componentStories(Layout, {
    decorator: Story =>
        <Router>
            {Story()}
        </Router>
});

metadata.parameters = {
    controls: {
        exclude: ['children'],
    },
};

metadata.args = {
    logo: 'AigonixLightCube',
    primaryNavigationItems,
    secondaryNavigationItems,
    selectionMenuItems,
    children: <CurrentPath />,
};

export default metadata;

export const Default = createStory();

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { componentStories } from '@dolittle/design-system';

const { metadata, createStory } = componentStories(() => <></>);

metadata.title = 'Dummy component';
metadata.parameters = {
    docs: {
        description: {
            component: `Write the description of the component here.`
        },
    },
};
export default metadata;

export const Default = createStory();

export const Enabled = createStory();

Enabled.parameters = {
    docs: {
        description: {
            story: `Write the individual component story description here.`
        }
    }
};
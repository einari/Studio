// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { componentStories } from '@dolittle/design-system';

import { Terminal } from './Terminal';
import { createFakeServer } from './fake';

const { metadata, createStory } = componentStories(Terminal, {
    overridePropsWith: () => ({
        ...createFakeServer(),
    }),
});

export default metadata;

export const Default = createStory({
});

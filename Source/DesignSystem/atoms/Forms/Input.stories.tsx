// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';
import { componentStories } from '@dolittle/design-system';

import { Form } from './Form';
import { Input } from './Input';

const { metadata, createStory } = componentStories(Input, {
    actions: {
        onChange: 'changed'
    },
    wrapper: ({ component }) => (
        <Form initialValues={{
            name: '',
            nameWithDefault: 'Default Application Name',
        }}>
            { component }
        </Form>
    )
});

export default metadata;

export const Default = createStory({
    id: 'name',
    label: 'Application Name',
});

export const Required = createStory({
    id: 'name',
    label: 'Application Name',
    required: true,
});

export const RequiredWithCustomMessage = createStory({
    id: 'name',
    label: 'Application Name',
    required: 'You must provide an application name',
});

export const Disabled = createStory({
    id: 'name',
    label: 'Application Name',
    disabled: true,
});

export const DisabledWithValue = createStory({
    id: 'nameWithDefault',
    label: 'Application Name',
    disabled: true,
});


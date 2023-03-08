// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';

import { componentStories, NavigationBar } from '@dolittle/design-system';

import { MainLinks, SecondaryLinks, SelectionMenu, MobileSecondaryLinks } from '../../helpers/dummyContent';
import { Content, Router } from '../../helpers/ReactRouter';

const { metadata, createStory } = componentStories(NavigationBar, {
    decorator: (Story) => (
        <Router>
            <Box>
                <Toolbar />
                <Routes>
                    <Route path='*' element={<Content />} />
                </Routes>

                {Story()}
            </Box>
        </Router>
    ),
});

metadata.parameters = {
    controls: { include: [] }
};

metadata.args = {
    mainLinks: <MainLinks />,
    secondaryLinks: <SecondaryLinks />,
    mobileDropdownMenu: <SelectionMenu />,
    mobileSecondaryLinks: <MobileSecondaryLinks />,
};

export default metadata;

export const Default = createStory();
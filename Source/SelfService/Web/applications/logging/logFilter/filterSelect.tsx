// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { InputBase, MenuItem, Select, SelectProps } from '@mui/material';

export type FilterSelectProps<T> = SelectProps<T>;

export const FilterSelect = <T,>(props: FilterSelectProps<T>) =>
    <MenuItem dense sx={{ minHeight: '36px', pl: 1, pr: 0, mr: 1, display: 'inline-flex', borderRadius: 0.5 }}>
        <Select
            {...props}
            input={<InputBase />}
            sx={{
                'typography': 'button',
                '& .MuiInputBase-input.MuiSelect-select': { minHeight: 'unset' },
                '& .MuiSelect-icon': { color: 'inherit' },
            }}
        />
    </MenuItem>;

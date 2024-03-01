// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { GridColDef, GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid-pro';

import { Button, DataGridEditCellView, DataGridSelectCellView } from '@dolittle/design-system';

const parameterModeOptions = [
    {
        value: 'Optional',
        label: 'Optional',
    },
    {
        value: 'Required',
        label: 'Required',
    },
    {
        value: 'Hardcoded value',
        label: 'Hardcoded value',
    },
];

export const commandsListDetailPanelColumns: GridColDef[] = [
    {
        ...GRID_CHECKBOX_SELECTION_COL_DEF,
    },
    {
        field: 'name',
        headerName: 'M3 Argument',
        minWidth: 160,
        flex: 1,
    },
    {
        field: 'description',
        headerName: 'Description',
        editable: true,
        renderCell: DataGridEditCellView,
        minWidth: 200,
        flex: 1,
    },
    {
        field: 'parameterName',
        headerName: 'Parameter Name',
        editable: true,
        renderCell: DataGridEditCellView,
        minWidth: 200,
        flex: 1,
    },
    {
        field: 'defaultValue',
        headerName: 'Default Value',
        editable: true,
        renderCell: DataGridEditCellView,
        minWidth: 200,
        flex: 1,
    },
    {
        field: 'mode',
        headerName: 'Mode',
        headerAlign: 'center',
        editable: true,
        type: 'singleSelect',
        valueOptions: parameterModeOptions,
        // This is for demo purposes only, in a real application you would use the commented line below.
        //renderCell: DataGridSelectCellView,
        renderCell: ({ value }) => (
            <Button label={value ? value : 'Optional'} color='subtle' endWithIcon='ArrowDropDownRounded' sx={{ width: 1, height: 1 }} />
        ),
        minWidth: 200,
        flex: 1,
    },
];

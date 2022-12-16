// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Paper, SxProps } from '@mui/material';

import { DataGridPro, GridCallbackDetails, GridColDef, GridExperimentalProFeatures, GridRowModel, GridEditMode, GridRowModesModel, GridSelectionModel } from '@mui/x-data-grid-pro';

export type DataTableProProps = {
    rows: GridRowModel[];
    columns: GridColDef[];
    editMode?: GridEditMode | undefined;
    disableRowSelectionOnClick?: boolean;
    isRowCheckbox?: boolean;
    selectedRows?: GridSelectionModel;
    onSelectedRowsChange?: React.Dispatch<React.SetStateAction<GridSelectionModel>>;
    processRowUpdate?: ((newRow: any, oldRow: any) => any) | undefined;
    onProcessRowUpdateError?: ((error: any) => void) | undefined;
    rowModeStatus?: GridRowModesModel | undefined;
    handleRowModeState?: ((rowModesModel: GridRowModesModel, details: GridCallbackDetails<any>) => void) | undefined;
    experimentalFeatures?: Partial<GridExperimentalProFeatures> | undefined;
    sx?: SxProps;
};

export const DataTablePro = (props: DataTableProProps) =>
    <Paper sx={{ width: 1, height: 1 }}>
        <DataGridPro
            rows={props.rows}
            columns={props.columns}
            editMode={props.editMode}
            getRowHeight={() => 'auto'}
            autoHeight={true}
            headerHeight={46}
            disableColumnMenu
            disableSelectionOnClick={props.disableRowSelectionOnClick || false}
            hideFooter
            checkboxSelection={props.isRowCheckbox || false}
            selectionModel={props.selectedRows}
            onSelectionModelChange={props.onSelectedRowsChange}
            processRowUpdate={props.processRowUpdate}
            onProcessRowUpdateError={props.onProcessRowUpdateError}
            rowModesModel={props.rowModeStatus}
            onRowModesModelChange={props.handleRowModeState}
            experimentalFeatures={props.experimentalFeatures}
            sx={props.sx}
        />
    </Paper>;

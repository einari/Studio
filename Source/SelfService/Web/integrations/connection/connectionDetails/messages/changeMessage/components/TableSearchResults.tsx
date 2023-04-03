// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Paper } from '@mui/material';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';

import { TableListingEntry } from '../../../../../../apis/integrations/generated';

const columns: GridColDef<TableListingEntry>[] = [
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 270,
        flex: 1,
    },
    {
        field: 'description',
        headerName: 'Description',
        minWidth: 270,
        flex: 1,
    },
];

type DataGridTableListingEntry = TableListingEntry & {
    id: string;
};

export type TableSearchResultsProps = {
    tableListings: TableListingEntry[];
    isLoading: boolean;
    onTableSelected: (table: TableListingEntry) => void;
};

export const TableSearchResults = ({ tableListings, isLoading, onTableSelected }: TableSearchResultsProps) => {
    const dataGridListing: DataGridTableListingEntry[] = tableListings.map((tableListing) => {
        return {
            id: tableListing.name || '',
            ...tableListing,
        };
    });

    const handleRowClick = (tableListing: TableListingEntry) => {
        onTableSelected(tableListing);
    };

    return (
        <Paper sx={{ width: 1 }}>
            <DataGridPro
                rows={dataGridListing}
                columns={columns}
                getRowHeight={() => 'auto'}
                autoHeight
                headerHeight={46}
                disableColumnMenu
                hideFooter
                disableSelectionOnClick
                loading={isLoading}
                onRowClick={({ row }) => handleRowClick(row)}
            />
        </Paper>
    );
};
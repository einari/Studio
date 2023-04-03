// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';

import { AlertBox, Button, Icon } from '@dolittle/design-system/';
import { GridSelectionModel } from '@mui/x-data-grid-pro';

import { TableListingEntry } from '../../../../../../apis/integrations/generated';
import { useConnectionsIdMessageMappingsTablesTableGet } from '../../../../../../apis/integrations/mappableTablesApi.hooks';

import { useConnectionId } from '../../../../../routes.hooks';

import { ViewModeProps } from '../ViewMode';
import { ContentSection } from './ContentSection';
import { MessageMappingTable } from './MessageMappingTable';

export type TableSectionProps = ViewModeProps & {
    selectedTable: TableListingEntry;
    onBackToSearchResultsClicked: () => void;
};

export const TableSection = (props: TableSectionProps) => {
    const connectionId = useConnectionId();
    const [selectedRowIds, setSelectedRowIds] = useState<GridSelectionModel>([]);

    if (!connectionId || !props.selectedTable.name) return <AlertBox />;

    const { data: mappableTableResult, isLoading } = useConnectionsIdMessageMappingsTablesTableGet({
        id: connectionId,
        table: props.selectedTable.name,
    });

    if (!mappableTableResult?.value) return <AlertBox />;

    const mappableTableColumns = mappableTableResult.value.columns || [];
    const requiredTableColumns = mappableTableResult.value.required || [];
    const preselectedInitialIds = requiredTableColumns.map(required => required.m3ColumnName!);

    return (
        <ContentSection
            title={`${props.selectedTable.name} Table`}
            beforeHeaderSlot={
                <Button
                    label='Back to Search Results'
                    startWithIcon={<Icon icon='ArrowBack' />}
                    variant='text'
                    color='subtle'
                    sx={{ ml: 1, mt: 2 }}
                    onClick={props.onBackToSearchResultsClicked}
                />
            }
        >
            <MessageMappingTable
                mappableTableColumns={mappableTableColumns}
                isLoading={isLoading}
                selectedIds={(selectedRowIds.length > 0) ? selectedRowIds : preselectedInitialIds as GridSelectionModel}
                disabledRows={preselectedInitialIds}
                onSelectedIdsChanged={setSelectedRowIds}
            />
        </ContentSection>
    );
};

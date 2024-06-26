// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';

import { DataGridPro } from '@mui/x-data-grid-pro';

import { dataGridDefaultProps, DataGridWrapper } from '@dolittle/design-system';

import { ServiceAccountListDto } from '../../../../../../../apis/integrations/generated';

import { CredentialsDataGridToolbar } from './dataGridToolbar';
import { CredentialsDataGridColumns } from './CredentialsDataGridColumns';

export type CredentialsDataGridProps = {
    credentials: ServiceAccountListDto[];
    isLoading: boolean;
    onCredentialCreate: () => void;
};

export const CredentialsDataGrid = ({ credentials, isLoading, onCredentialCreate }: CredentialsDataGridProps) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
        <DataGridWrapper background='dark'>
            <DataGridPro
                {...dataGridDefaultProps}
                rows={credentials}
                columns={CredentialsDataGridColumns}
                loading={isLoading}
                getRowId={row => row.serviceAccountName}
                checkboxSelection
                onSelectionModelChange={model => setSelectedIds(model as string[])}
                components={{
                    Toolbar: () => <CredentialsDataGridToolbar onGenerate={onCredentialCreate} selectedIds={selectedIds} />
                }}
            />
        </DataGridWrapper>
    );
};

// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useReducer, useState } from 'react';

import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';

import { ContentSection } from '@dolittle/design-system';

import { ServiceAccountListDto } from '../../../../../../apis/integrations/generated';
import { CACHE_KEYS } from '../../../../../../apis/integrations/CacheKeys';
import { useConnectionsIdServiceAccountsServiceAccountNameDelete } from '../../../../../../apis/integrations/serviceAccountApi.hooks';

import { CredentialsDataGrid } from './CredentialsDataGrid';
import { DeleteCredentialsDialog, deleteCredentialsDialogReducer } from './DeleteCredentialsDialog';

export type CredentialsTableGridIndexProps = {
    credentials: ServiceAccountListDto[];
    isLoading: boolean;
    connectionId: string;
};

export const CredentialsTableGridIndex = ({ credentials, isLoading, connectionId }: CredentialsTableGridIndexProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const [deleteDialogState, deleteDialogDispatch] = useReducer(deleteCredentialsDialogReducer, { open: false, credentials: [], connectionId, isLoading: false });

    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const deleteMutation = useConnectionsIdServiceAccountsServiceAccountNameDelete();
    const tableActionEnabled = selectedIds.length > 0;

    const handleDelete = (credentials: string[]) => {
        deleteDialogDispatch({ type: 'loading', payload: { isLoading: true } });
        const deleteMutations = credentials.map(id => deleteMutation.mutateAsync({ id: connectionId, serviceAccountName: id }));

        Promise.allSettled(deleteMutations)
            .then(results => {
                results.forEach((result, index) => {
                    const id = credentials[index];
                    if (result.status === 'fulfilled') {
                        enqueueSnackbar(`Credential '${id}' successfully deleted.`);
                    } else {
                        enqueueSnackbar(`Failed to delete credential '${id}': ${result.reason}.`, { variant: 'error' });
                    }
                });
                queryClient.invalidateQueries([CACHE_KEYS.ConnectionServiceAccounts_GET, connectionId]);
            })
            .finally(() => deleteDialogDispatch({ type: 'close' }));
    };

    return (
        <ContentSection
            headerProps={{
                buttons: [
                    {
                        label: 'Delete',
                        color: 'error',
                        startWithIcon: 'DeleteRounded',
                        disabled: !tableActionEnabled,
                        onClick: () => deleteDialogDispatch({ type: 'open', payload: { credentials: selectedIds } })
                    }
                ]
            }}
        >
            <DeleteCredentialsDialog dispatch={deleteDialogDispatch} state={deleteDialogState} onDelete={handleDelete} />
            <CredentialsDataGrid items={credentials} isLoading={isLoading} onSelectionChanged={setSelectedIds} />
        </ContentSection>
    );
};

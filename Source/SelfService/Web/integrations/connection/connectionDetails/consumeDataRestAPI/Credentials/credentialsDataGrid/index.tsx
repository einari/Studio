// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';

import { DataGridPro } from '@mui/x-data-grid-pro';

import { dataGridDefaultProps, DataGridWrapper, NoContentSection } from '@dolittle/design-system';

import { ServiceAccountListDto } from '../../../../../../apis/integrations/generated';

import { GenerateCredentialsDialogIndex } from './generateCredentialsDialog';
import { DeleteCredentialsDialog } from './DeleteCredentialsDialog';
import { CredentialsDataGridToolbar } from './CredentialsDataGridToolbar';
import { CredentialsDataGridColumns } from './CredentialsDataGridColumns';

export type CredentialsDataGridIndexProps = {
    credentials: ServiceAccountListDto[];
    connectionId: string;
    isLoading: boolean;
    isButtonDisabled: boolean;
    onActiveCredentialChange: (tokenName: string | undefined) => void;
};

export const CredentialsDataGridIndex = ({ credentials, connectionId, isLoading, isButtonDisabled, onActiveCredentialChange }: CredentialsDataGridIndexProps) => {
    const [isCredentialsDialogOpen, setIsCredentialsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const handleGenerateNewCredentials = () => {
        onActiveCredentialChange(undefined);
        setIsCredentialsDialogOpen(true);
    };

    const handleTokenGenerated = (tokenName: string) => {
        onActiveCredentialChange(tokenName);
    };

    const handleGenerateCredentialsCancel = () => {
        onActiveCredentialChange(undefined);
        setIsCredentialsDialogOpen(false);
    };

    return (
        <>
            <GenerateCredentialsDialogIndex
                connectionId={connectionId}
                isDialogOpen={isCredentialsDialogOpen}
                onDialogCancel={handleGenerateCredentialsCancel}
                onFormComplete={handleTokenGenerated}
            />

            <DeleteCredentialsDialog
                connectionId={connectionId}
                isDialogOpen={isDeleteDialogOpen}
                onDialogCancel={() => setIsDeleteDialogOpen(false)}
                credentialsToDelete={selectedIds}
            />

            {credentials.length
                ? (
                    <DataGridWrapper background='dark'>
                        <DataGridPro
                            {...dataGridDefaultProps}
                            rows={credentials}
                            columns={CredentialsDataGridColumns}
                            loading={isLoading}
                            getRowId={row => row.serviceAccountName!}
                            checkboxSelection
                            onSelectionModelChange={model => setSelectedIds(model as string[])}
                            components={{
                                Toolbar: () => (
                                    <CredentialsDataGridToolbar
                                        onGenerate={handleGenerateNewCredentials}
                                        onDelete={() => setIsDeleteDialogOpen(true)}
                                        isGenerateButtonDisabled={isButtonDisabled}
                                        isDeleteButtonDisabled={!selectedIds.length}
                                    />
                                ),
                            }}
                        />
                    </DataGridWrapper>
                ) : (
                    <NoContentSection
                        title='No credentials yet...'
                        description={`To generate your first credentials, select 'Generate New Credentials'. Provide a name, description and set its access rights.`}
                        label='Generate new credentials'
                        onCreate={handleGenerateNewCredentials}
                        isDisabled={isButtonDisabled}
                        sx={{ p: 0 }}
                    />
                )}
        </>
    );
};
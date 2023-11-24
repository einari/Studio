// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState, useEffect, useMemo } from 'react';

import { Collapse } from '@mui/material';

import { AlertBox, ContentParagraph, ContentSection, ContentWithSubtitle, NoContentSection } from '@dolittle/design-system';

import { useConnectionIdFromRoute } from '../../../../routes.hooks';

import { useConnectionsIdKafkaServiceAccountsGet } from '../../../../../apis/integrations/kafkaServiceAccountApi.hooks';

import { GenerateServiceAccountForm } from './GenerateServiceAccountForm';
import { ServiceAccountsTableSection } from './ServiceAccountsTableSection';

import { GenerateServiceAccountDialog } from './generateServiceAccountDialog';
import { ServiceAccountsDataGrid } from './ServiceAccountsDataGrid';

export const ServiceAccountsSection = () => {
    const connectionId = useConnectionIdFromRoute();

    const [expandForm, setExpandForm] = useState(false);
    const [resetForm, setResetForm] = useState(false);

    const [isGenerateServiceAccountDialogOpen, setIsGenerateServiceAccountDialogOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const { data, isLoading, isError, error } = useConnectionsIdKafkaServiceAccountsGet({ id: connectionId }, {
        refetchInterval(data, query) {
            const hasEntriesWithoutCertificateData = data?.some((item) => item.certificateExpiry === null || item.certificateExpiry === undefined);
            return hasEntriesWithoutCertificateData ? 1000 : false;
        },
    });

    const items = useMemo(
        () => data?.sort((a, b) => b.createdAt! > a.createdAt! ? 1 : -1) || [], [data]
    );

    const allowGenerateNew = !expandForm;

    const handleNewGenerated = (tokenName: string) => {
        setExpandForm(false);
    };

    const handleGenerateNewEntry = () => {
        setResetForm(true);
        setExpandForm(true);
    };

    const handleFormCancelled = () => {
        if (items.length) {
            setExpandForm(false);
        }
        setResetForm(true);
    };

    useEffect(() => {
        if (expandForm && !isLoading) {
            setExpandForm(true);
        } else {
            const shouldExpand = !isLoading && (items.length === 0);
            setExpandForm(shouldExpand);
        }

    }, [items, expandForm, isLoading]);

    useEffect(() => {
        //TODO: Pav - no like this
        if (resetForm) {
            setResetForm(false);
        }
    }, [resetForm]);

    if (isError) return <AlertBox message={`Error while fetching credentials list. ${error}`} />;

    return (
        <>
            <GenerateServiceAccountDialog
                connectionId={connectionId}
                isDialogOpen={isGenerateServiceAccountDialogOpen}
                onDialogClose={() => setIsGenerateServiceAccountDialogOpen(false)}
            />

            <ContentWithSubtitle title='Service Accounts' infoTooltipLabel='Manage service accounts to be used in apps connecting to the Async API.'>
                <NoContentSection
                    title='No Service Accounts yet...'
                    description={`To generate New Service Account, select 'Generate New Service Account'. Provide a name, description and set its access rights.`}
                    label='Generate New Service Account'
                    icon='RocketLaunch'
                    //isDisabled={disabled}
                    onCreate={() => setIsGenerateServiceAccountDialogOpen(true)}
                    sx={{ p: 0 }}
                />

                <ServiceAccountsDataGrid
                    serviceAccountsDataGridRows={items}
                    isLoading={isLoading}
                    onServiceAccountCreate={() => setIsGenerateServiceAccountDialogOpen(true)}
                    onServiceAccountDelete={() => setIsGenerateServiceAccountDialogOpen(true)}
                    onViewCertificate={() => { }}
                    onViewKey={() => { }}
                    onSelectionChanged={setSelectedIds}
                />
            </ContentWithSubtitle>

            <ContentSection
                title='Service Accounts'
                headerProps={{
                    titleTextVariant: 'title',
                    buttons: allowGenerateNew ? [
                        {
                            label: 'Generate new service account',
                            variant: 'outlined',
                            onClick: handleGenerateNewEntry,
                            disabled: !allowGenerateNew
                        }
                    ] : []
                }}
            >
                <ContentParagraph>
                    Manage service accounts to be used in apps connecting to the Async API
                </ContentParagraph>

                <Collapse in={expandForm}>
                    <ContentSection hideDivider title='Generate New Service Account'>
                        <GenerateServiceAccountForm
                            resetForm={resetForm}
                            connectionId={connectionId}
                            onFormComplete={handleNewGenerated}
                            onFormCancelled={handleFormCancelled}
                            canCancel={items.length > 0}
                        />
                    </ContentSection>
                </Collapse>

                <ServiceAccountsTableSection items={items} isLoading={isLoading} connectionId={connectionId} />
            </ContentSection>
        </>
    );
};

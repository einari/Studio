// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form } from '@dolittle/design-system';


import { ConnectionsIdMessageMappingsTablesTableMessagesMessagePostRequest, MessageMappingModel, SetMessageMappingRequestArguments } from '../../../../../../apis/integrations/generated';
import { UseMutationResult } from '@tanstack/react-query';

export type NewMessageMappingParameters = SetMessageMappingRequestArguments & {
    name: string;
};

export type MessageMappingFormProps = {
    connectionId: string;
    selectedTableName: string;
    messageId: string;
    messageType: MessageMappingModel;
    children?: React.ReactNode;
    saveMessageMappingMutation: UseMutationResult<void, unknown, ConnectionsIdMessageMappingsTablesTableMessagesMessagePostRequest, unknown>
};


export const MessageMappingForm = ({
    connectionId,
    selectedTableName,
    messageId,
    messageType,
    children,
    saveMessageMappingMutation
}: MessageMappingFormProps) => {
    const navigate = useNavigate();

    const handleNewMessageSave = (values: NewMessageMappingParameters) => {
        saveMessageMappingMutation.mutate({
            id: connectionId!,
            message: values.name,
            table: selectedTableName!,
            setMessageMappingRequestArguments: {
                description: values.description!,
                fields: values.fields!,
            },
        }, {
            onSuccess(data, variables, context) {
                navigate(`..`);
                enqueueSnackbar('Message successfully created', { variant: 'success' });
            },
            onError(error, variables, context) {
                console.log('error', error);
                enqueueSnackbar('Something went wrong when trying to save the message', { variant: 'error' });
            },
        });
    };

    return (
        <Form<NewMessageMappingParameters>
            initialValues={{
                name: messageId ?? '',
                description: messageType?.description ?? '',
                fields: messageType?.fieldMappings?.map(field => ({
                    columnName: field.mappedColumn?.m3ColumnName!,
                    fieldName: field.mappedName,
                    fieldDescription: field.mappedDescription,
                })) || [],
            }}
            onSubmit={handleNewMessageSave}
        >
            {children}
        </Form>
    );
};
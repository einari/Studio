// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { useState } from 'react';
import { DialogResult, IDialogProps } from '../dialogs/useDialog';
import {
    DialogType,
    Dialog,
    DialogFooter,
    PrimaryButton,
    DefaultButton,
    Stack,
    TextField,
    Checkbox
} from '@fluentui/react';

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Create Microservice',
    closeButtonAriaLabel: 'Close'
};

export interface ICreateMicroserviceDialogInput {
    path: string;
}

export interface ICreateMicroserviceDialogOutput {
    path: string;
    name: string;
    addWebFrontend: boolean;
}

export const CreateMicroserviceDialog = (props: IDialogProps<ICreateMicroserviceDialogInput, ICreateMicroserviceDialogOutput>) => {
    const [isValid, setIsValid] = useState(false);

    const output: ICreateMicroserviceDialogOutput = {
        path: props.input.path,
        name: '',
        addWebFrontend: true
    };

    function create() {
        props.onClose(DialogResult.Success, output);
    }

    function cancel() {
        props.onClose(DialogResult.Cancelled, output);
    }

    function validateName(input: string) {
        return input.length === 0 ? 'Required' : '';
    }

    function handleValidationResult(message: string | JSX.Element, value: string) {
        setIsValid(message.toString().length === 0);
    }

    return (
        <Dialog
            hidden={!props.visible}
            onDismiss={create}
            dialogContentProps={dialogContentProps}>

            <Stack tokens={{ childrenGap: 10 }}>
                <TextField label="Name" required onChange={(e, value) => output.name = value} onGetErrorMessage={validateName} onNotifyValidationResult={handleValidationResult} />
                <Checkbox label="Add Web frontend?" defaultChecked onChange={(e, value) => output.addWebFrontend = value} />
            </Stack>

            <DialogFooter>
                <PrimaryButton onClick={create} text="Create" disabled={!isValid} />
                <DefaultButton onClick={cancel} text="Cancel" />
            </DialogFooter>
        </Dialog>
    );
};

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';

import { FileUploadForm, FileUploadFormRef, MaxWidthTextBlock } from '@dolittle/design-system';
import { IonConfigRequest, IonConfigRequestFromJSON } from '../../../apis/integrations/generated';


/**
 * Simple type guard to check if the object is of type IonConfigRequest
 * Other approaches found here: https://stackoverflow.com/a/62438143/115303
 * @param o The object to check
 * @returns o as an IonConfigRequest
 */
function isIonConfigRequest(o: any): o is IonConfigRequest {
    return 'iu' in o &&
        'pu' in o &&
        'ot' in o &&
        'saak' in o &&
        'sask' in o &&
        'ci' in o &&
        'cs' in o;
}

export const instructions = [
    `1. Open Infor ION API. Open the menu from the upper left corner and select 'Infor ION API'.`,
    `2. Select 'Authorized Apps' from the left hand menu followed by the '+' icon to add a new account.`,
    `3. Provide a name. Example: "Dolittle_Bridge".`,
    `4. Under 'Type', select 'Backend Service'.`,
    `5. Provide a description. Example: "Integration Connector".`,
    `6. Toggle on 'Use Bridge Authentication. Optional: You can toggle on ‘User Impersonation' if you would like to monitor specific user activity.`,
    `7. Click the save icon button.`,
    `8. Scroll down and click 'Download Credentials' button. If you would like to use an account you've previously created, you can access the account via 'Authorized Apps' then selecting the account name.`,
    `9. When the dialog pops up, toggle on 'Create Service Account' and provide a username from your M3 account you would like to associate with the ION service account.`,
    `10. Last, click 'Download'. Upload the files below.`,
];


const InstructionsListItems = () =>
    <Box sx={{ pl: 3, pt: 3 }}>
        {instructions.map((item, index) => (
            <MaxWidthTextBlock key={index} sx={{ mb: 2 }}>{item}</MaxWidthTextBlock>
        ))}
    </Box>;

export type IonServiceAccountCredentialsProps = {
    canEdit: boolean;
};

export const IonServiceAccountCredentials = React.forwardRef<FileUploadFormRef, IonServiceAccountCredentialsProps>(function (
    props: IonServiceAccountCredentialsProps,
    ref: React.ForwardedRef<FileUploadFormRef>
) {

    const { setValue } = useFormContext();

    const handleFileUploaded = (file: File | FileList) => {
        file = file as File;
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const contents = event.target?.result as string;
            try {
                const json = JSON.parse(contents);
                if (isIonConfigRequest(json)) {
                    setValue('ionConfiguration', json, { shouldDirty: true });
                    return;
                }
            } catch (error) {
                console.error('Error uploading ION Configuration', error);
            }
            enqueueSnackbar('Error uploading ION Configuration', { variant: 'error' });
        };

        fileReader.readAsText(file);
    };
    return <>
        <MaxWidthTextBlock>
            Follow the steps below then upload your credentials. If you already have an ION service account setup, skip to step 8 to access your credentials.
        </MaxWidthTextBlock>

        <InstructionsListItems />

        {props.canEdit && (
            <MaxWidthTextBlock>
                <FileUploadForm onSelected={handleFileUploaded} validFileExtensions={['json']} ref={ref} />
            </MaxWidthTextBlock>
        )}

    </>;
});

IonServiceAccountCredentials.displayName = 'IonServiceAccountCredentials';

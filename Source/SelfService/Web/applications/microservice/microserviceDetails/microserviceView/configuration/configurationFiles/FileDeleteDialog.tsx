// Copyright (c) Aigonix. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React, { Fragment } from 'react';

import { GridSelectionModel } from '@mui/x-data-grid-pro';
import { Divider, List, ListItem } from '@mui/material';

import { Dialog } from '@dolittle/design-system';

type DeleteConfigFileDialogProps = {
    selectedDataRows: GridSelectionModel;
    open: boolean;
    setOpen: (open: boolean) => void;
    handleDelete: () => Promise<void>;
};

export const DeleteConfigFileDialog = ({ selectedDataRows, open, setOpen, handleDelete }: DeleteConfigFileDialogProps) => {
    const hasManySelectedRows = selectedDataRows.length > 1;
    const isPlural = hasManySelectedRows ? 'files' : 'file';

    return (
        <Dialog
            id='delete-config-file'
            isOpen={open}
            title={`Delete configuration ${isPlural}`}
            description={`Are you sure you want to delete ${hasManySelectedRows ? 'these' : 'this'} ${isPlural}?`}
            onCancel={() => setOpen(false)}
            confirmBtnLabel='Delete'
            confirmBtnColor='error'
            onConfirm={handleDelete}
        >
            <List>
                {selectedDataRows.map((file, index) =>
                    <Fragment key={file}>
                        <ListItem>{file}</ListItem>
                        {selectedDataRows.length - 1 !== index && <Divider />}
                    </Fragment>
                )}
            </List>
        </Dialog>
    );
};

// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { useFieldArray } from 'react-hook-form';

import { Box } from '@mui/material';
import { AddCircleRounded, DeleteRounded } from '@mui/icons-material';

import { Button, Input } from '@dolittle/design-system';

export const HeadArguments = ({ disabled }: { disabled?: boolean }) => {
    // Name comes from the Form initial values and the name of the fields array.
    const { fields, append, remove } = useFieldArray({
        name: 'headArguments'
    });

    return (
        <Box>
            {fields.map((arg, index) => (
                <Box key={arg.id}>
                    <Input
                        id={`headArguments.${index}.value` as const}
                        label='CMD Argument'
                        autoFocus
                        disabled={disabled}
                        required
                        sx={{ width: 220 }}
                    />
                    <Button
                        label='Remove'
                        secondary
                        disabled={disabled}
                        startWithIcon={<DeleteRounded />}
                        onClick={() => remove(index)}
                        sx={{ m: 1.5 }}
                    />
                </Box>
            ))}

            <Button
                label='Add CMD argument'
                secondary
                startWithIcon={<AddCircleRounded />}
                disabled={disabled}
                onClick={() => append({ value: '' })}
                sx={{ mt: 2.5 }}
            />
        </Box>
    );
};
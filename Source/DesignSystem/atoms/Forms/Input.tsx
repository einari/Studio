// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';
import { Message, ValidationRule } from 'react-hook-form';

import { FormControl, FormHelperText, InputLabel, OutlinedInput, SxProps } from '@mui/material';

import { useController, FieldProps } from './helpers';
import type { Form } from './Form';

/**
 * The props for a {@link Input} component.
 */
export type InputProps = {
    sx?: SxProps;
} & FieldProps;

/**
 * Creates an text input field to be used in a {@link Form}.
 * @param props The {@link InputProps} for the input.
 * @returns A new {@link Input} component.
 */
export const Input = (props: InputProps) => {
    const { field, hasError, errorMessage } = useController(props);

    return (
        <FormControl sx={{
            'width': 220,
            '.MuiInputLabel-root[data-shrink="true"]': {
                top: 0
            },
            '.MuiFormHelperText-root.Mui-error': {
                color: 'error.light',
                letterSpacing: '0.4px'
            },
            ...props.sx
        }}>
            <InputLabel
                htmlFor={props.id}
                required={isRequired(props.required)}
                error={hasError}
                sx={{ top: -8 }}
            >
                {props.label}
            </InputLabel>

            <OutlinedInput
                {...field}
                type='text'
                id={props.id}
                error={hasError}
                disabled={props.disabled}
                label={props.label}
                aria-describedby={`${props.id}-helper-text`}
                size='small'
                sx={{
                    letterSpacing: '0.15px',
                    mb: {
                        sm: 0,
                        xs: 2.5,
                    },
                }}
            />

            <FormHelperText error={hasError} id={`${props.id}-helper-text`}>
                {errorMessage}
            </FormHelperText>
        </FormControl>
    );
};

const isRequired = (required?: Message | ValidationRule<boolean>): boolean => {
    if (required === undefined) {
        return false;
    }

    if (typeof required === 'boolean') {
        return required;
    }

    if (typeof required === 'string') {
        return true;
    }

    return required.value;
};

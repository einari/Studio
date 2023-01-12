// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import React from 'react';

import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Paper, SxProps, Tooltip, Typography } from '@mui/material';

import { FieldProps, isRequired, useController } from './helpers';
import type { Form } from './Form';

/**
 * The props for a {@link Input} component.
 */
export type InputProps = {
    sx?: SxProps;
    startAdornment?: React.ReactNode;
    placeholder?: string;
    tooltipTitle?: string;
    tooltipText?: string;
} & FieldProps;

/**
 * Creates an text input field to be used in a {@link Form}.
 * @param props The {@link InputProps} for the input.
 * @returns A new {@link Input} component.
 */
export const Input = (props: InputProps) => {
    const { field, hasError, errorMessage } = useController(props);

    return (
        <FormControl
            variant='outlined'
            size='small'
            sx={{
                width: 220,
                mb: {
                    sm: 0,
                    xs: 2.5
                },
                ...props.sx
            }}>
            <InputLabel
                htmlFor={props.id}
                required={isRequired(props.required)}
                disabled={props.disabled}
                error={hasError}
            >
                {props.label}
            </InputLabel>

            <Tooltip
                id={`${props.id}-tooltip`}
                disableHoverListener
                placement='right'
                title={
                    <Paper sx={{ py: 1, px: 2 }}>
                        <Typography variant='body2' sx={{ fontWeight: 700 }}>{props.tooltipTitle}</Typography>
                        <Typography variant='body2'>{props.tooltipText}</Typography>
                    </Paper>
                }
            >
                <OutlinedInput
                    {...field}
                    type='text'
                    id={props.id}
                    error={hasError}
                    disabled={props.disabled}
                    label={props.label}
                    startAdornment={props.startAdornment ?
                        <InputAdornment position='start'>
                            <Typography variant='body2'>{props.startAdornment}</Typography>
                        </InputAdornment> : null
                    }
                    placeholder={props.placeholder}
                    aria-describedby={`${props.id}-helper-text`}
                />
            </Tooltip>

            <FormHelperText error={hasError} id={`${props.id}-helper-text`}>
                {errorMessage}
            </FormHelperText>
        </FormControl>
    );
};

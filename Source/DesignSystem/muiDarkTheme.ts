// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#8C9AF8',
      light: '#b3bbfb',
      dark: '#6678f6',
      contrastText: '#191A21',
    },
    secondary: {
      main: '#76E8DB',
      light: '#A3EFE7',
      dark: '#48E0CF',
      contrastText: '#191A21',
    },
    background: {
      default: '#0F1014',
      paper: '#191A21',
    },
    text: {
      disabled: '#93959f',
      primary: '#fafafa',
      secondary: '#cecfd0',
    },
    error: {
      main: '#F88C8C',
      light: '#FBB3B3',
      dark: '#F66666',
      contrastText: '#191A21',
    },
    warning: {
      main: '#FF9366',
      light: '#FFB799',
      dark: '#FF6F33',
      contrastText: '#191A21',
    },
    info: {
      main: '#8cd0f8',
      light: '#A3D9F9',
      dark: '#70a6c6',
      contrastText: '#191A21',
    },
    success: {
      main: '#76e8a2',
      light: '#91EDB5',
      dark: '#5EBA82',
      contrastText: '#191A21',
    },
    divider: '#2C2B33',
  },
  typography: {
    fontFamily: '"Rubik", "Open sans", "Arial", sans-serif',
    fontWeightMedium: 500,
    h1: {
        fontSize: '3.75rem', //60px
        fontWeight: 800,
    },
    h2: {
        fontSize: '3rem', //48px
        fontWeight: 500,
    },
    h3: {
        fontSize: '2.25rem', //36px
        fontWeight: 500,
    },
    h4: {
        fontSize: '1.875rem', //30px
        fontWeight: 500,
    },
    h5: {
        fontSize: '1.625rem', //26px
        fontWeight: 500,
    },
    h6: {
        fontSize: '1.375rem', //22px
        fontWeight: 300,
    },
    subtitle1: {
        fontSize: '1.25rem', //20px
        fontWeight: 500,
    },
    subtitle2: {
        fontSize: '1.125rem', //18px
        fontWeight: 500,
    },
    body1: {
        fontSize: '1rem', //16px
    },
    body2: {
        fontSize: '0.875rem', //14px
    },
    button: {
        fontSize: '0.75rem', //12px
    },
    caption: {
        fontSize: '0.75rem', //12px
    },
    overline: {
        fontSize: '0.625rem', //10px
    },
  },
};
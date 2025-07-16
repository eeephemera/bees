'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '3rem',
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '6rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.75rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2.125rem',
      },
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#424242',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

export default theme; 
'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#2a3019',
          contrastText: '#d7be69',
        },
        secondary: {
          main: '#d7be69',
          contrastText: '#1f1930',
          dark: '#a47e4f',
        },
        background: {
          default: '#d7be69',
          paper: '#f9ffe1',
        },
        divider: '#d7be69',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#2a3019',
          contrastText: '#d7be69',
        },
        secondary: {
          main: '#5c6b28',
          contrastText: '#1f1930',
        },
        background: {
          paper: '#1B1F10',
          default: '#12121',
        },
        text: {
          primary: '#d7be69',
          secondary: '#a47e4f',
        },
        divider: '#424a26'
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
    nativeColor: true,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;

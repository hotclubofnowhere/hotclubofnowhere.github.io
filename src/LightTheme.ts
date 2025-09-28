'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LightTheme = createTheme({
  colorSchemes: { light: true, dark: true },
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
  palette: {
    mode: 'light',
    primary: {
      main: '#2a3019',
      contrastText: '#d7be69',
    },
    secondary: {
      main: '#e1d6f6',
      contrastText: '#1f1930',
    },
    background: {
      default: '#f9ffe1',
      paper: '#f9ffe1',
    },
  },
});

export default LightTheme;

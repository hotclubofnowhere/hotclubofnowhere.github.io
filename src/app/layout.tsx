'use client';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import theme from '@/theme';
import NavBar from '@/components/NavBar';
import PageTitle from '@/components/PageTitle';
import NavControls from '@/components/NavControls';
import ModeSwitch from '@/components/ModeSwitch';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NextLink from 'next/link'

export default function RootLayout(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    setPageName(String(pathname.split('/')[1]));
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <NavBar>
              <PageTitle title={process.env.NEXT_PUBLIC_WEBSITE_NAME} page={pageName} />
              <NavControls>
                <ButtonGroup size="large" variant="text" color="inherit" aria-label="Navigation">
                  <Button href="/">Home</Button>
                  <Button href="/about" component={NextLink}>About</Button>
                </ButtonGroup>
                <ModeSwitch />
              </NavControls>
            </NavBar>
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

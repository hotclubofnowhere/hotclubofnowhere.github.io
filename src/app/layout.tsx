'use client';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import Box from '@mui/material/Box';
import theme from '@/theme';
import AppBar from '@/components/AppBar';
import ModeSwitch from '@/components/ModeSwitch';
import Footer from '@/components/Footer';

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<InitColorSchemeScript attribute="class" />
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<AppBar title={process.env.NEXT_PUBLIC_WEBSITE_NAME}>
								<ModeSwitch />
							</AppBar>
							{props.children}
							<Footer />
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

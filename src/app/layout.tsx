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

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<InitColorSchemeScript attribute="class" />
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<AppBar title={process.env.NEXT_PUBLIC_WEBSITE_NAME}>
							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
								<ModeSwitch />
							</Box>
						</AppBar>
						{props.children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

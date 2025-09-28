'use client';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import LightTheme from '@/LightTheme';
import AppBar from '@/components/AppBar';

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
					<ThemeProvider theme={LightTheme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<AppBar title={process.env.NEXT_PUBLIC_WEBSITE_NAME} />
						{props.children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>My top - best top </title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				

				<meta property="og:locale" content="ru_RU" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

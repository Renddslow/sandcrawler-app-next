import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import Navigation from '@components/navigation';

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </Head>
      <Global />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

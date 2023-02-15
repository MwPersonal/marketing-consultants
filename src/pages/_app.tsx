import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

import { GlobalStyle } from '@/styles/Global';

import defaultTheme from '@/themes/default';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

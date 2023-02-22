import type { AppProps } from 'next/app';

import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

import { GlobalStyle } from '@/styles/Global';

import defaultTheme from '@/themes/default';

import WhatsappButton from '@/components/WhatsappButton';
import LeavePage from '@/components/LeavePage';

import 'rodal/lib/rodal.css';

export default function App({ Component, pageProps }: AppProps) {
  const [leavingState, setLeavingState] = useState(false);

  useEffect(() => {
    if (window) {
      document.onmouseleave = () => {
        setLeavingState(true);
      };
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <WhatsappButton />
        <LeavePage
          isVisible={leavingState}
          onClose={() => setLeavingState(false)}
        />

        <GlobalStyle />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

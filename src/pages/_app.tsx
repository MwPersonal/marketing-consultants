import type { AppProps } from 'next/app';

import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

import { GlobalStyle } from '@/styles/Global';

import defaultTheme from '@/themes/default';

import LeavePage from '@/components/LeavePage';

import 'rodal/lib/rodal.css';
import { useDebouncedCallback } from 'use-debounce';

export default function App({ Component, pageProps }: AppProps) {
  const [leavingState, setLeavingState] = useState(false);

  const onMouseLeave = useDebouncedCallback(
    () => setLeavingState(true),
    5 * 60 * 1000,
    { maxWait: 5 * 60 * 1000, leading: true },
  );

  useEffect(() => {
    if (document) {
      document.onmouseleave = (event) => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        )
          onMouseLeave();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />

        <GlobalStyle />
        <LeavePage
          isVisible={leavingState}
          onClose={() => setLeavingState(false)}
        />
      </ThemeProvider>

      <div id="portal"></div>

      <Analytics />
    </>
  );
}

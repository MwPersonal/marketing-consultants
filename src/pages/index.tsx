import Head from 'next/head';

import TimerAccess from '@/components/TimerAccess';

import { HomeMain } from '@/styles/pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Marketing Consultores</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMain>
        <TimerAccess />
      </HomeMain>
    </>
  );
}

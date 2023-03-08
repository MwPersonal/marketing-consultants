import Head from 'next/head';

import Footer from '@/components/Footer';
import AnimationBackground from '@/components/AnimationBackground';

import { Container } from '@/styles/pages/consultor';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vem pra Clube - Obrigado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Container>
        <AnimationBackground />
      </Container>

      <Footer />
    </>
  );
}

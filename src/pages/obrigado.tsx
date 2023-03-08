import Head from 'next/head';

import Footer from '@/components/Footer';
import AnimationBackground from '@/components/AnimationBackground';

import {
  Container,
  ContainerButton,
  HomeDescription,
  HomeMain,
  HomeSubTitle,
  HomeTitle,
} from '@/styles/pages/obrigado';
import DefaultButton from '@/components/DefaultButton';

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
        <HomeMain>
          <HomeSubTitle>Você acaba de dar o primeiro passo!</HomeSubTitle>
          <HomeTitle>Parabéns</HomeTitle>
          <HomeDescription>
            O seu próximo passo é entrar em nosso grupo no WhatsApp para se
            manter atualizado sobre sua jornada como Consultor Clube Autos
          </HomeDescription>

          <ContainerButton>
            <DefaultButton>GRUPO WHATSAPP</DefaultButton>
          </ContainerButton>
        </HomeMain>
      </Container>

      <Footer />
    </>
  );
}

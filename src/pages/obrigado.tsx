import Head from 'next/head';

import logoImage from '@/public/logo.png';

import Footer from '@/components/Footer';
import AnimationBackground from '@/components/AnimationBackground';

import {
  CardContent,
  CardSubTitle,
  CardTitle,
  Container,
  ContainerBar,
  ContainerButton,
  ContainerCard,
  HomeDescription,
  HomeLogo,
  HomeMain,
  HomeTitle,
} from '@/styles/pages/obrigado';

import DefaultButton from '@/components/DefaultButton';
import LoadingBar from '@/components/LoadingBar';

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
        <HomeLogo src={logoImage} width={322} height={322} alt="Logo home" />
        <HomeMain>
          <HomeTitle>Parabéns</HomeTitle>
          <HomeDescription>
            Agora só faltam 2 passos para você estar dentro do nosso projeto!
          </HomeDescription>

          <ContainerBar>
            <LoadingBar text="completo" number={77} duration={3} />
          </ContainerBar>

          <ContainerCard>
            <CardSubTitle>Passo 1</CardSubTitle>
            <CardTitle>Faça parte do nosso Grupo no WhatsApp</CardTitle>
            <CardContent>
              Dentro do nosso grupo, você poderá ter suas perguntas respondidas,
              interações com outros participantes e as novidades sobre sua
              formação
            </CardContent>
            <ContainerButton
              href="https://chat.whatsapp.com/Cgn9Ri6sIxrLdXXVyOeNRN"
              target="_balnk"
            >
              <DefaultButton>Entrar no grupo</DefaultButton>
            </ContainerButton>
          </ContainerCard>

          <ContainerCard>
            <CardSubTitle>Passo 2</CardSubTitle>
            <CardTitle>Veja o que te enviamos no seu email</CardTitle>
            <CardContent>
              Nós acabamos de te enviar um e-mail para confirmar sua inscrição
              do nosso processo seletivo, junto algumas informações primordiais!
            </CardContent>
          </ContainerCard>
        </HomeMain>
      </Container>

      <Footer />
    </>
  );
}

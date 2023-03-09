import Head from 'next/head';

import { useTheme } from 'styled-components';

import TimerAccess from '@/components/TimerAccess';
import Benefits from '@/components/Benefits';
import DefaultButton from '@/components/DefaultButton';
import Consultants from '@/components/Consultants';
import MissingCareer from '@/components/MissingCareer';
import Reason from '@/components/Reason';
import DiscoverAbout from '@/components/DiscoverAbout';
import Regions from '@/components/Regions';
import StepByStep from '@/components/StepByStep';
import BannerOpportunity from '@/components/BannerOpportunity';
import FrequentlyAsked from '@/components/FrequentlyAsked';
import Guarantee from '@/components/Guarantee';
import Footer from '@/components/Footer';
import AnimationBackground from '@/components/AnimationBackground';

import {
  CLTTitle,
  ContainerButton,
  ContainerContent,
  ContainerContentCLT,
  ContainerHowKnow,
  HomeDescription,
  HomeMain,
  HomeTitle,
  Description,
  Container,
} from '@/styles/pages/home';
import WhatsappButton from '@/components/WhatsappButton';
import LocalVideoPlayer from '@/components/LocalVideoPlayer';

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Vem pra Clube - Seja um Consultor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Container>
        <AnimationBackground />
        <HomeMain>
          <HomeTitle>
            COMO PESSOAS COMUNS ESTÃO GARANTINDO UMA PROFISSÃO NOVA NO MERCADO
            GANHANDO ENTRE R$ 3 MIL E R$ 5 MIL JÁ NO PRIMEIRO MÊS.
          </HomeTitle>
          <HomeDescription>
            Sem investir 1 centavo, sem promessas mirabulantes, sem passar meses
            tentando e não conseguindo, e o melhor, você pode ter tudo isso em
            pouco tempo.
          </HomeDescription>

          <LocalVideoPlayer link="https://player-vz-56779d00-410.tv.pandavideo.com.br/embed/?v=038868bb-eec4-4c32-ae17-a75a740e2b0c" />

          <ContainerButton>
            <DefaultButton>QUERO SABER MAIS SOBRE A FORMAÇÃO</DefaultButton>
          </ContainerButton>

          <Benefits />

          <TimerAccess />
        </HomeMain>
      </Container>

      <ContainerContent color={theme.currentLine}>
        <Consultants title="VEJA OS CONSULTORES QUE SE FORMARAM E TIVERAM SUCESSO" />

        <MissingCareer />

        <ContainerHowKnow>
          <DefaultButton>QUERO SABER COMO</DefaultButton>
        </ContainerHowKnow>
      </ContainerContent>

      <ContainerContentCLT color={theme.yellow}>
        <CLTTitle>
          Caso esteja procurando <b>emprego com carteira assinada (CLT)</b>, por
          favor, <b>ESSA OPORTUNIDADE NÃO É PARA VOCÊ!</b>
        </CLTTitle>
        <Description>
          Trabalhamos com pessoas que querem mudar de vida se tornando
          empreendedores, sem limite de ganhos, com muito mais liberdade para
          viver e proporcionar uma vida melhor pra si e pra família!
        </Description>
      </ContainerContentCLT>

      <Reason />

      <DiscoverAbout />

      <Regions />

      <StepByStep />

      <BannerOpportunity />

      <FrequentlyAsked />

      <Guarantee />

      <WhatsappButton />

      <Footer />
    </>
  );
}

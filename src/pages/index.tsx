import Head from 'next/head';

import { useTheme } from 'styled-components';

import TimerAccess from '@/components/TimerAccess';
import VideoPlayer from '@/components/VideoPlayer';
import Benefits from '@/components/Benefits';
import DefaultButton from '@/components/DefaultButton';
import Consultants from '@/components/Consultants';
import MissingCareer from '@/components/MissingCareer';
import Reason from '@/components/Reason';

import clubeautosImage from '@/public/images/clubeautos.png';

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
} from '@/styles/pages/home';
import DiscoverAbout from '@/components/DiscoverAbout';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Landing Page Marketing Consultores</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

        <VideoPlayer thumbnail={clubeautosImage} />

        <ContainerButton>
          <DefaultButton>QUERO SABER MAIS SOBRE A FORMAÇÃO</DefaultButton>
        </ContainerButton>

        <Benefits />

        <TimerAccess />
      </HomeMain>

      <ContainerContent color={theme.currentLine}>
        <Consultants />

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
    </>
  );
}

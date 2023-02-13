import Head from 'next/head';
import Image from 'next/image';

import TimerAccess from '@/components/TimerAccess';
import VideoPlayer from '@/components/VideoPlayer';

import clubeautosImage from '@/public/images/clubeautos.png';

import {
  ContainerButton,
  ContainerContent,
  HomeDescription,
  HomeMain,
  HomeTitle,
} from '@/styles/pages/home';
import Benefits from '@/components/Benefits';
import DefaultButton from '@/components/DefaultButton';
import Consultants from '@/components/Consultants';

export default function Home() {
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

      <ContainerContent>
        <Consultants />
      </ContainerContent>
    </>
  );
}

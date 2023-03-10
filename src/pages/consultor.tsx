import Head from 'next/head';

import { useTheme } from 'styled-components';

import DefaultButton from '@/components/DefaultButton';
import Consultants from '@/components/Consultants';
import GuaranteeConsultor from '@/components/GuaranteeConsultor';
import Footer from '@/components/Footer';
import CardDetail from '@/components/CardDetail';
import AnimationBackground from '@/components/AnimationBackground';
import WhatsappButton from '@/components/WhatsappButton';
import LocalVideoPlayer from '@/components/LocalVideoPlayer';
import LeavePage from '@/components/LeavePage';

import {
  CLTTitle,
  ContainerButton,
  ContainerContent,
  ContainerContentCLT,
  HomeDescription,
  HomeMain,
  HomeTitle,
  Description,
  HomeSubTitle,
  OportunityTitle,
  ContainerButtonOportunity,
  ListDetail,
  Container,
} from '@/styles/pages/consultor';

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Vem pra Clube - Seja um Consultor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <LeavePage />

      <Container>
        <AnimationBackground />
        <HomeMain>
          <HomeTitle>
            GANHE DINHEIRO FAZENDO SEU AMIGO ECONOMIZAR O DELE
          </HomeTitle>
          <HomeSubTitle>
            NOVA PROFISSÃO QUE ESTÁ FAZENDO PESSOAS COMUNS FATURAREM DE 3 A 5
            MIL REAIS LOGO NOS PRIMEIROS MÊSES
          </HomeSubTitle>
          <HomeDescription>
            Não é sobre vender cursos, você não precisa fazer nenhum
            investimento e não é marketing multinível ou pirâmide! É uma
            oportunidade de crescimento, de você ser seu próprio chefe e mudar a
            sua realidade financeira!
          </HomeDescription>

          <LocalVideoPlayer link="https://player-vz-56779d00-410.tv.pandavideo.com.br/embed/?v=038868bb-eec4-4c32-ae17-a75a740e2b0c" />

          <ContainerButton>
            <DefaultButton>QUERO AUMENTAR MINHA RENDA</DefaultButton>
          </ContainerButton>
        </HomeMain>
      </Container>

      <ContainerContent color={theme.currentLine}>
        <Consultants title="VEJA O RESULTADO DE QUEM JÁ ESTÁ VIVENDO DESSA NOVA PROFISSÃO" />
      </ContainerContent>

      <ContainerContentCLT color={theme.yellow}>
        <CLTTitle>GRANDE OPORTUNIDADE DE CRESCIMENTO!</CLTTitle>
        <Description>
          Mesmo que você não tenha experiência em vendas, não tem problema! Nós
          te daremos todo o apoio para o seu crescimento no nosso plano de
          carreira.
        </Description>
      </ContainerContentCLT>

      <ContainerContent color={theme.currentLine}>
        <ListDetail>
          <CardDetail
            title="SEM INVESTIMENTO INICIAL"
            description="Não é uma franquia. Você não precisa ter dinheiro para começar, aliás, você não precisa fazer nenhum investimento!"
          />
          <CardDetail
            title="NÃO É MARKETING DIGITAL"
            description="Não se preocupe! O modelo de negócio não é relacionado a marketing digital, infoprodutos ou esquema de pirâmide!"
          />
          <CardDetail
            title="+40 MILHÕES PAGOS"
            description="Mais de R$ 40 milhões pagos em indenizações aos associados!"
          />
          <CardDetail
            title="PRAZO MÉDIO DE PAGAMENTO"
            description="Entre 30 e 45 dias é o prazo médio de recebimento das indenizaçãoes dos últimos 5 anos."
          />
          <CardDetail
            title="PRESTADORES"
            description="+ de 1.000 fornecedores e prestadores de serviço em todo o Brasil."
          />
          <CardDetail
            title="ATENDIMENTO NACIONAL"
            description="Assistência 24h em todo o território nacional"
          />
        </ListDetail>
        <OportunityTitle>
          Se você acredita que <b>A VIDA É MUITO MAIS QUE PAGAR BOLETOS</b>,
          preencha o formulário abaixo que um (a) dos especialistas do time
          CLUBE vai entrar em contato com{` `}
          <b>você para seguir com as demais etapas do processo seletivo:</b>
        </OportunityTitle>
        <ContainerButtonOportunity>
          <DefaultButton>QUERO SABER MAIS SOBRE A OPORTUNIDADE</DefaultButton>
        </ContainerButtonOportunity>
      </ContainerContent>

      <GuaranteeConsultor />

      <WhatsappButton />

      <Footer />
    </>
  );
}

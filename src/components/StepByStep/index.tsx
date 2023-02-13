import libraryImage from '@/public/images/steps/library.png';
import homeOfficeImage from '@/public/images/steps/homeoffice.png';
import happyImage from '@/public/images/steps/happy.png';

import {
  Container,
  ContainerImage,
  ListStep,
  StepDescription,
  StepImage,
  StepItem,
  StepTitle,
  Title,
} from './styles';

const StepByStep: React.FC = () => {
  return (
    <Container>
      <Title>VEJA OS PASSOS PARA SER UM CONSULTOR FORMADO</Title>
      <ListStep>
        <StepItem>
          <ContainerImage>
            <StepImage src={libraryImage} alt="Library image" />
          </ContainerImage>
          <StepTitle>1. VOCÊ PASSARÁ POR UM PROCESSO SELETIVO</StepTitle>
          <StepDescription>
            Você entrará na nossa fila de espera e avaliaremos o seu perfil e
            faremos alguns testes para ver se você está preparado para ser um
            Consultor de Proteção Veicular Clube Autos.
          </StepDescription>
        </StepItem>
        <StepItem>
          <ContainerImage>
            <StepImage src={homeOfficeImage} alt="Home office image" />
          </ContainerImage>
          <StepTitle>
            2. FORMAÇÃO EAD PROFISSIONAL EM CONSULTOR DE PROTEÇÃO VEICULAR
            TOTALMENTE GRATUITO
          </StepTitle>
          <StepDescription>
            Você se formará no nosso curso completo totalmente gratuito, com
            todo o conhecimento que você vai precisar para iniciar suas vendas
          </StepDescription>
        </StepItem>
        <StepItem>
          <ContainerImage>
            <StepImage src={happyImage} alt="Happy image" />
          </ContainerImage>
          <StepTitle>
            3. VOCÊ ESTARÁ PRONTO PARA COMEÇAR SUA CARREIRA E INICIAR SEUS
            GANHOS
          </StepTitle>
          <StepDescription>
            Então você será acompanhado e instruído por um(a) dos nossos(as)
            consultores(as) que estão a anos no mercado e te auxiliarão a
            conquistar suas primeiras vendas.
          </StepDescription>
        </StepItem>
      </ListStep>
    </Container>
  );
};

export default StepByStep;

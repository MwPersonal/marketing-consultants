import {
  AboutMore,
  Container,
  ContainerTimes,
  TextDescription,
  Title,
} from './styles';

import Timer from './Timer';

const TimerAccess: React.FC = () => {
  return (
    <Container>
      <Title>INSCRIÇÕES POR TEMPO LIMITADO</Title>
      <ContainerTimes>
        <Timer text="26" legend="DIAS" />
        <Timer text="13" legend="HORAS" />
        <Timer text="28" legend="MINUTOS" />
        <Timer text="46" legend="SEGUNDOS" />
      </ContainerTimes>
      <TextDescription>
        Estamos selecionando pessoas interessadas em uma nova profissão, e por
        isso, estamos oferecendo uma formação que custa R$6.000,00 de forma
        GRATUITA e por tempo TEMPO LIMITADO para dar oportunidade para quem está
        buscando uma nova fase profissional em sua vida.
      </TextDescription>
      <AboutMore>QUERO SABER MAIS SOBRE A OPORTUNIDADE</AboutMore>
    </Container>
  );
};

export default TimerAccess;

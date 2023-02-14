import DefaultButton from '../DefaultButton';
import {
  ContainerButton,
  ContainerOpportunity,
  Description,
  Title,
} from './styles';

const BannerOpportunity: React.FC = () => {
  return (
    <ContainerOpportunity>
      <Title>
        <b>GRANDE OPORTUNIDADE</b> de crescimento com <b>INVESTIMENTO ZERO!</b>
      </Title>
      <Description>
        Mesmo que você não tenha experiência em vendas, não tem problema! Nós te
        daremos todo o suporte para o seu crescimento e evolução em nosso plano
        de carreira.
      </Description>
      <ContainerButton>
        <DefaultButton>COMEÇAR AGORA</DefaultButton>
      </ContainerButton>
    </ContainerOpportunity>
  );
};

export default BannerOpportunity;

import { FaGraduationCap } from 'react-icons/fa';
import { GiCycle } from 'react-icons/gi';
import { TbBook } from 'react-icons/tb';

import { useTheme } from 'styled-components';

import {
  BenefitContent,
  BenefitDescription,
  BenefitIcon,
  BenefitItem,
  BenefitTitle,
  Container,
} from './styles';

const Benefits: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <BenefitItem>
        <BenefitIcon>
          <FaGraduationCap size={46} color={theme.currentLine} />
        </BenefitIcon>
        <BenefitContent>
          <BenefitTitle>FORMAÇÃO GRATUITA</BenefitTitle>
          <BenefitDescription>Aprenda na nossa plataforma</BenefitDescription>
        </BenefitContent>
      </BenefitItem>
      <BenefitItem>
        <BenefitIcon>
          <GiCycle size={46} color={theme.currentLine} />
        </BenefitIcon>
        <BenefitContent>
          <BenefitTitle>PROCESSO RÁPIDO</BenefitTitle>
          <BenefitDescription>
            Passe por uma seleção e já saia vendendo
          </BenefitDescription>
        </BenefitContent>
      </BenefitItem>
      <BenefitItem>
        <BenefitIcon>
          <TbBook size={46} color={theme.currentLine} />
        </BenefitIcon>
        <BenefitContent>
          <BenefitTitle>MATERIAL DE APOIO</BenefitTitle>
          <BenefitDescription>
            Nossos cursos são gratuitos e irão auxiliar muito na nossa jornada.
          </BenefitDescription>
        </BenefitContent>
      </BenefitItem>
    </Container>
  );
};

export default Benefits;

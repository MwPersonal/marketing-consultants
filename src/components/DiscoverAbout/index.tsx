import { FaCarCrash } from 'react-icons/fa';
import { RiFileEditFill } from 'react-icons/ri';
import { TfiMapAlt } from 'react-icons/tfi';

import { useTheme } from 'styled-components';

import {
  Badge,
  ContainerComponent,
  Description,
  Option,
  OptionDescription,
  Options,
  OptionTitle,
  TitleComponent,
} from './styles';

const DiscoverAbout: React.FC = () => {
  const theme = useTheme();

  return (
    <ContainerComponent>
      <Badge>Conheça a Clube Autos</Badge>
      <TitleComponent>
        a Clube Autos é uma das maiores associações de proteção veicular do
        Brasil.
      </TitleComponent>
      <Options>
        <Option>
          <RiFileEditFill size={128} color={theme.orange} />
          <OptionTitle>+ 15000</OptionTitle>
          <OptionDescription>associados</OptionDescription>
        </Option>
        <Option>
          <TfiMapAlt size={128} color={theme.orange} />
          <OptionTitle>+ 20</OptionTitle>
          <OptionDescription>regionais</OptionDescription>
        </Option>
        <Option>
          <FaCarCrash size={128} color={theme.orange} />
          <OptionTitle>+ 5000</OptionTitle>
          <OptionDescription>ocorrências atendidas</OptionDescription>
        </Option>
      </Options>
      <Description>
        Pensando em maneiras de facilitar este processo, a Clube Autos conta com
        serviços especializados na área, priorizando sempre a qualidade
        oferecida e o seu bem estar e comodidade, buscando aprimorar-se cada dia
        mais para melhor atender você.
      </Description>
    </ContainerComponent>
  );
};

export default DiscoverAbout;

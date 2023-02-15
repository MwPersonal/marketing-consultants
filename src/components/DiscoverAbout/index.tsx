import { useInView } from 'react-intersection-observer';
import { useTheme } from 'styled-components';
import { ListOptions } from './ListOptions';

import {
  Badge,
  ContainerComponent,
  Description,
  TitleComponent,
} from './styles';

const DiscoverAbout: React.FC = () => {
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  return (
    <ContainerComponent ref={ref}>
      <Badge>Conheça a Clube Autos</Badge>
      <TitleComponent>
        a Clube Autos é uma das maiores associações de proteção veicular do
        Brasil.
      </TitleComponent>
      {inView && <ListOptions />}
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

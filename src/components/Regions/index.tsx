import Image from 'next/image';

import { useTheme } from 'styled-components';

import catanduvaImage from '@/public/images/regions/catanduva.png';

import {
  Badge,
  ContainerComponent,
  ListRegions,
  Region,
  RegionTitle,
} from './styles';

const Regions: React.FC = () => {
  const theme = useTheme();

  return (
    <ContainerComponent>
      <Badge>Veja algumas de nossas regionais</Badge>
      <ListRegions>
        {[...new Array(12)].map((_, index) => (
          <Region key={`region-${index}`}>
            <RegionTitle>Catanduva - SP</RegionTitle>
            <Image src={catanduvaImage} alt="Region" width={270} height={270} />
          </Region>
        ))}
      </ListRegions>
    </ContainerComponent>
  );
};

export default Regions;

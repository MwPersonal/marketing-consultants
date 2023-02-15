import Image from 'next/image';

import catanduvaImage from '@/public/images/regions/catanduva.png';

import {
  Badge,
  ContainerComponent,
  ListRegions,
  Region,
  RegionTitle,
} from './styles';

const Regions: React.FC = () => {
  return (
    <ContainerComponent>
      <Badge>Veja algumas de nossas regionais</Badge>
      <ListRegions>
        {[...new Array(12)].map((_, index) => (
          <Region key={`region-${index}`}>
            <RegionTitle>Catanduva - SP</RegionTitle>
            <Image
              src={catanduvaImage}
              alt="Region"
              width={270}
              height={270}
              placeholder="blur"
            />
          </Region>
        ))}
      </ListRegions>
    </ContainerComponent>
  );
};

export default Regions;

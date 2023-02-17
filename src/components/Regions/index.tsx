import { useState } from 'react';
import Image from 'next/image';

import DefaultButton from '../DefaultButton';

import catanduvaImage from '@/public/images/regions/catanduva.png';

import {
  Badge,
  ContainerButton,
  ContainerComponent,
  ListRegions,
  Region,
  RegionTitle,
} from './styles';

const Regions: React.FC = () => {
  const [listRegions, setListRegions] = useState([...new Array(4)]);

  return (
    <ContainerComponent>
      <Badge>Veja algumas de nossas regionais</Badge>
      <ListRegions>
        {listRegions.map((_, index) => (
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
      {listRegions.length < 12 && (
        <ContainerButton onClick={() => setListRegions([...new Array(12)])}>
          <DefaultButton>VER MAIS REGIONAIS</DefaultButton>
        </ContainerButton>
      )}
    </ContainerComponent>
  );
};

export default Regions;

import carecaImage from '@/public/images/careca.png';
import Image from 'next/image';

import {
  Container,
  ContainerContent,
  Description,
  ImageRepresent,
  Title,
} from './styles';

const MissingCareer: React.FC = () => {
  return (
    <Container>
      <Title>O QUE ESTÁ FALTANDO PARA VOCÊ É UMA CARREIRA!</Title>
      <ImageRepresent>
        <Image src={carecaImage} alt="Careca image" />
      </ImageRepresent>
      <ContainerContent>
        <Description>
          O Renato tinha algo em comum com você: Ele tinha o propósito de
          encontrar uma profissão que lhe desse condições de levar conforto e
          sustentar sua família.
          <br />
          Porém, lhe faltava uma oportunidade que permitisse que ele evoluísse
          em uma carreira profissional. Assim que se formou em{` `}
          <b>consultor de proteção veicular Clube Autos</b>, os resultados foram
          acima dos esperados.
          <br />
          Uma verdadeira surpresa que Renato compartilhou com sua familia: um
          <b> salário de R$3.850,00 logo no primeiro mês de consultor.</b>
          <br />
          Renato conseguiu uma formação profissional e{` `}
          <b>
            agora pode pensar no seu futuro e dar conforto e qualidade de vida
            para sua casa.
          </b>
        </Description>
      </ContainerContent>
    </Container>
  );
};

export default MissingCareer;

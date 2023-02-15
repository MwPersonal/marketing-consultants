import Link from 'next/link';
import { FaGlobe, FaInstagram } from 'react-icons/fa';

import { Container, Item } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link href="https://clubeautos.com.br/" target="_blank">
        <Item>
          <FaGlobe />
          Site institucional
        </Item>
      </Link>
      <Link href="https://instagram.com/clube.autos/" target="_blank">
        <Item>
          <FaInstagram />
          Instagram
        </Item>
      </Link>
      <Item>© ClubeAutos 2023 - Um Clube de Proteção</Item>
    </Container>
  );
};

export default Footer;

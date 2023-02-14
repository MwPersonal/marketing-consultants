import { FaGlobe, FaInstagram } from 'react-icons/fa';

import { Container, Item, Title } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Title>Links:</Title>
      <Item>
        <FaGlobe />
        Site institucional
      </Item>
      <Item>
        <FaInstagram />
        Instagram
      </Item>
      <Item>© ClubeAutos 2023 - Um Clube de Proteção</Item>
    </Container>
  );
};

export default Footer;

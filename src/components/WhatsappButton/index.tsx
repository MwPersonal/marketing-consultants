import { FaWhatsapp } from 'react-icons/fa';
import { Container } from './styles';

const WhatsappButton: React.FC = () => {
  return (
    <Container href="https://whatsapp.com" target="_blank">
      <FaWhatsapp size={46} color="#ffffff" />
    </Container>
  );
};

export default WhatsappButton;

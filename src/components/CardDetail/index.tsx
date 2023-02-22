import { Container, DetailContent, DetailTitle } from './styles';

const CardDetail: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Container>
      <DetailTitle>{title}</DetailTitle>
      <DetailContent>{description}</DetailContent>
    </Container>
  );
};

export default CardDetail;

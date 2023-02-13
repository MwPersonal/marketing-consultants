import hugoImage from '@/public/images/hugo.png';
import rafaImage from '@/public/images/rafa.png';
import diegoImage from '@/public/images/diego.png';
import leticiaImage from '@/public/images/leticia.png';

import VideoPlayer from '../VideoPlayer';

import { Consultant, Container, ListConsultants, Title } from './styles';

const Consultants: React.FC = () => {
  return (
    <Container>
      <Title>VEJA OS CONSULTORES QUE SE FORMARAM E TIVERAM SUCESSO</Title>
      <ListConsultants>
        <Consultant>
          <VideoPlayer thumbnail={hugoImage} />
        </Consultant>
        <Consultant>
          <VideoPlayer thumbnail={rafaImage} />
        </Consultant>
        <Consultant>
          <VideoPlayer thumbnail={diegoImage} />
        </Consultant>
        <Consultant>
          <VideoPlayer thumbnail={leticiaImage} />
        </Consultant>
      </ListConsultants>
    </Container>
  );
};

export default Consultants;

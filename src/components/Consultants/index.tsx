import oneImage from '@/public/images/consultants/one.jpeg';
import twoImage from '@/public/images/consultants/two.jpeg';
import threeImage from '@/public/images/consultants/three.jpeg';
import fourImage from '@/public/images/consultants/four.jpeg';

import VideoPlayer from '../VideoPlayer';

import { Consultant, Container, ListConsultants, Title } from './styles';

const Consultants: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListConsultants>
        <Consultant>
          <VideoPlayer
            thumbnail={oneImage}
            link="https://www.youtube.com/embed/P198hIINV4s?autoplay=1"
            title="COMO FUI DA FALÊNCIA AO SUCESSO COM PROTEÇÃO VEICULAR?"
          />
        </Consultant>
        <Consultant>
          <VideoPlayer
            thumbnail={twoImage}
            link="https://www.youtube.com/embed/1fX_IouHAGc?autoplay=1"
            title="COMO CONQUISTEI A ESTABILIDADE FINANCEIRA?"
          />
        </Consultant>
        <Consultant>
          <VideoPlayer
            thumbnail={threeImage}
            link="https://www.youtube.com/embed/gwbxwALoq8I?autoplay=1"
            title="COMO PROTEÇÃO VEICULAR MUDOU MINHA VIDA?"
          />
        </Consultant>
        <Consultant>
          <VideoPlayer
            thumbnail={fourImage}
            link="https://www.youtube.com/embed/p86LxkdMIgw?autoplay=1"
            title="DO SALÁRIO MÍNIMO À LIBERDADE FINANCEIRA?"
          />
        </Consultant>
      </ListConsultants>
    </Container>
  );
};

export default Consultants;

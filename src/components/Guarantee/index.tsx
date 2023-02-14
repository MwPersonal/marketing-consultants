import Image from 'next/image';

import guaranteeImage from '@/public/images/guarantee.png';

import {
  ButtonSubmit,
  Completed,
  CompletedBar,
  CompletedText,
  Container,
  ContainerContent,
  ContainerForm,
  Description,
  DescriptionForm,
  ListInput,
  Title,
} from './styles';
import DefaultTextInput from '../DefaultTextInput';

const Guarantee: React.FC = () => {
  return (
    <Container>
      <Title>GARANTIA INCONDICIONAL</Title>
      <ContainerContent>
        <Image src={guaranteeImage} alt="Guarantee" />
        <Description>
          Garantimos que ao final da sua formação você receberá uma mentoria com
          um especialista que irá te direcionar em todos os passos para iniciar
          suas vendas e sua carreira de consultor de Proteção Veicular Clube
          Autos.
        </Description>
      </ContainerContent>

      <ContainerForm>
        <Completed>
          <CompletedText>
            <b>95%</b> completo
          </CompletedText>
          <CompletedBar porcentage={95} />
        </Completed>
        <DescriptionForm>
          Quanto custa pra você não alcançar seus objetivos profissionais?
          <br />
          <br />
          Qual o custo de investir o seu tempo e energia em uma formação que não
          vai te trazer ganhos?
          <br />
          <br />
          Quanto custa ver pessoas com menos conhecimento que você, ganhando
          mais e levando uma vida melhor que a sua?
          <br />
          <br />
          Quanto custa pra você não viver do seu legado?
          <br />
          <br />
          Queremos formar novos consultores de proteção veicular iguais ao
          Renato, e garantir que mais pessoas tenham acesso a uma formação
          profissional.
          <br />
          <br />
          É por isso que estamos abrindo uma oportunidade exclusiva para que
          novas pessoas possam se inscrever gratuitamente e ter a chance de se
          formar sem nenhum custo em uma das profissões que mais crescem e dão
          ótimos ganhos.
          <br />
          <br />
          Você terá acesso à formação completa de Consultor de Proteção Veicular
          Clube Autos, e a assim que se formar, terá um mentor para te ajudar em
          sua carreira!
          <br />
          <br />
          <b>
            O seu único investimento será sua dedicação e tempo na formação.
          </b>
        </DescriptionForm>

        <ListInput>
          <DefaultTextInput
            label="Nome:"
            placeholder="Exemplo exemplo exemplo"
          />
          <DefaultTextInput
            label="Email:"
            type="email"
            placeholder="exemplo@exemplo.exemplo"
          />
          <DefaultTextInput label="Celular:" placeholder="(99) 99999-9999" />
          <ButtonSubmit>PARTICIPAR</ButtonSubmit>
        </ListInput>
      </ContainerForm>
    </Container>
  );
};

export default Guarantee;

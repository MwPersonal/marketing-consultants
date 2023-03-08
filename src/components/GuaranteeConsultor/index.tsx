import { useInView } from 'react-intersection-observer';

import CounterNumberCrescent from '../CounterNumberCrescent';

import DefaultTextInput from '../DefaultTextInput';

import {
  ButtonSubmit,
  ButtonText,
  Completed,
  CompletedBar,
  CompletedText,
  Container,
  ContainerForm,
  DescriptionForm,
  ListInput,
  Title,
} from './styles';
import { ChangeEventHandler, useState } from 'react';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

const CompletedNumber = () => {
  return (
    <Completed>
      <CompletedText>
        <b>
          <CounterNumberCrescent duration={3} number={95} />%
        </b>
        {` `}
        completo
      </CompletedText>
      <CompletedBar porcentage={95} />
    </Completed>
  );
};

const GuaranteeConsultor: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState(``);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const onChangePhone: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPhoneNumber(formatPhoneNumber(event.target.value));
  };

  return (
    <Container>
      <ContainerForm
        action="https://webhook.sellflux.com/webhook/v2/form/lead/507cefd45103934642e8584a58e5e10e?not_query=true&redirect_url=https%3A%2F%2Fwww.vempraclube.com.br%2Fobrigado"
        method="post"
        ref={ref}
      >
        <Title>GARANTIA INCONDICIONAL</Title>
        {inView && <CompletedNumber />}
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
            name="name"
            required
          />
          <DefaultTextInput
            label="Email:"
            type="email"
            placeholder="exemplo@exemplo.exemplo"
            name="email"
            required
          />
          <DefaultTextInput
            label="Celular:"
            placeholder="(99) 99999-9999"
            name="tel"
            maxLength={15}
            onChange={onChangePhone}
            value={phoneNumber}
            required
          />
          <ButtonSubmit>
            <ButtonText>PARTICIPAR</ButtonText>
          </ButtonSubmit>
        </ListInput>
      </ContainerForm>
    </Container>
  );
};

export default GuaranteeConsultor;

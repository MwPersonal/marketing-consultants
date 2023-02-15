import { FaCheck } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import {
  AtentionTitle,
  Badge,
  ContainerComponent,
  Description,
  Option,
  Options,
  OptionText,
  TitleComponent,
} from './styles';

const Reason: React.FC = () => {
  const theme = useTheme();

  return (
    <ContainerComponent>
      <Badge>O mercado de proteção veicular em 2023</Badge>
      <TitleComponent>
        Essa tem sido uma opção cada vez mais escolhida pelos proprietários de
        veículos no Brasil.
      </TitleComponent>
      <AtentionTitle>A RAZÃO?</AtentionTitle>
      <Options>
        <Option>
          <FaCheck color={theme.orange} />
          <OptionText>Vantagens similares</OptionText>
        </Option>
        <Option>
          <FaCheck color={theme.orange} />
          <OptionText>Preço muito abaixo</OptionText>
        </Option>
      </Options>
      <Description>
        A proteção veicular, como o nome já diz, é um sistema de proteção para
        veículos.
        <br />
        <br />
        Muitos proprietários pensam que esse sistema é novo, mas ele já é
        utilizado no Brasil há muitos anos. O que esse serviço faz é indenizar o
        proprietário do veículo em caso de sinistro: roubo, furto, acidente e
        outros.
        <br />
        <br />
        As indenizações são feitas por um sistema de rateio. Os associados da
        proteção veicular pagam uma quantia mensal à Associação que escolheram e
        essa mensalidade é destinada a um fundo comum. Desse fundo, saem as
        indenizações.
        <br />
        <br />
        Para resumir, então: a proteção veicular é um serviço oferecido por
        Associações. Nela, os proprietários associados pagam uma mensalidade.
        Caso sofram algum sinistro, serão indenizados.
        <br />
        <br />
        Por quais motivos a proteção veicular pode ser opção melhor que o seguro
        privado? Pelo preço mais acessível, menor burocracia e pela cobertura
        que oferece.
      </Description>
    </ContainerComponent>
  );
};

export default Reason;

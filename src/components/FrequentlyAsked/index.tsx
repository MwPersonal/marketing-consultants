import Accordion from '../Accordion';

import { Container, Description, ListAccordion } from './styles';

const FrequentlyAsked: React.FC = () => {
  return (
    <Container>
      <ListAccordion>
        <Accordion title="A Clube Autos é franquia?">
          <Description>
            R: Não é uma franquia. Você não precisa ter dinheiro para começar,
            aliás, você não precisa fazer nenhum investimento!
          </Description>
        </Accordion>
        <Accordion title="Essa profissão é mais um modelo de marketing digital e gurus da internet?">
          <Description>
            R: Não se preocupe! O modelo de negócio não é relacionado a
            marketing digital, infoprodutos ou esquema de pirâmide! É uma
            comunidade de vendas.
          </Description>
        </Accordion>
        <Accordion title="Vocês são confiáveis?">
          <Description>
            R: Somos uma das melhores associações, mais de R$ 20 milhões pagos
            em indenizações aos associados, mais de 1.000 fornecedores e
            prestadores em todo o Brasil, mais de 3 anos de atuação, além de
            sermos afiliados da AAAPV(Agência de Regulamento...
          </Description>
        </Accordion>
        <Accordion title="Como recebo minhas comissões?">
          <Description>
            R: O prazo médio de recebimento das comissões é entre 30 e 45 dias.
          </Description>
        </Accordion>
        <Accordion title="O trabalho depende do horário comercial?">
          <Description>
            R: Não, nós funcionamos 24h por dia em todo o território nacional,
            não demandando horas a cumprir por parte dos consultores e
            independência do horário tradicional.
          </Description>
        </Accordion>
      </ListAccordion>
    </Container>
  );
};

export default FrequentlyAsked;

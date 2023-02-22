import { ReactNode, useRef } from 'react';
import { useState } from 'react';

import { useTheme } from 'styled-components';

import {
  Container,
  ContainerBody,
  ContainerHeader,
  Indicator,
  Title,
} from './styles';

const Accordion: React.FC<{
  title: string;
  children?: ReactNode;
}> = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const theme = useTheme();

  const bodyRef = useRef(null);

  return (
    <Container
      isOpened={isOpened}
      height={(bodyRef?.current as any)?.scrollHeight || 0}
    >
      <ContainerHeader onClick={() => setIsOpened((state) => !state)}>
        <Indicator size={26} color={theme.currentLine} />
        <Title>{title}</Title>
      </ContainerHeader>
      <ContainerBody ref={bodyRef}>{children}</ContainerBody>
    </Container>
  );
};

export default Accordion;

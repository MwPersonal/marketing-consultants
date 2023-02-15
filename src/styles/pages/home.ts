import styled from 'styled-components';

import { DefaultDescription, DefaultSubTitle, DefaultTitle } from '../Global';

export const HomeMain = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  padding: 100px 10px;

  @media (max-width: 1024px) {
    padding: 40px 10px;
  }
`;

export const HomeTitle = styled(DefaultTitle)`
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.yellow};
`;

export const HomeDescription = styled(DefaultSubTitle)`
  grid-column-start: 3;
  grid-column-end: 11;
  text-align: center;
  font-weight: 400;
  padding: 30px 0;
  color: ${({ theme }) => theme.currentLine};

  @media (max-width: 750px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 60px;
  grid-column-start: 3;
  grid-column-end: 11;

  @media (max-width: 830px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const ContainerHowKnow = styled.div`
  grid-column-start: 5;
  grid-column-end: 10;

  @media (max-width: 900px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

interface TContainerContent {
  color?: string;
}

export const ContainerContent = styled.div<TContainerContent>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  row-gap: 90px;
  padding: 90px 10px;
  width: 100%;
  background-color: ${({ color }) => color};
`;

export const ContainerContentCLT = styled(ContainerContent)`
  padding: 38px 0 60px 0;
  row-gap: 60px;
`;

export const CLTTitle = styled(DefaultTitle)`
  grid-column-start: 3;
  grid-column-end: 11;
  font-weight: normal;
  text-align: center;

  @media (max-width: 900px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const Description = styled(DefaultDescription)`
  grid-column-start: 4;
  grid-column-end: 10;
  text-align: center;

  @media (max-width: 900px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

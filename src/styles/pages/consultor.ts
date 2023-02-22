import styled from 'styled-components';

import { DefaultDescription, DefaultSubTitle, DefaultTitle } from '../Global';

export const HomeMain = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  padding: 100px 10px;
  color: ${({ theme }) => theme.currentLine};

  @media (max-width: 1024px) {
    padding: 40px 10px;
  }
`;

export const HomeTitle = styled(DefaultTitle)`
  grid-column: 3 / 11;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const HomeSubTitle = styled(DefaultSubTitle)`
  grid-column: 2 / 12;
  text-align: center;
  font-weight: 600;
  margin: 15px 0;
`;

export const HomeDescription = styled(DefaultDescription)`
  grid-column: 4 / 10;
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 60px;

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
  padding: 30px 0 30px 0;
  row-gap: 20px;
`;

export const CLTTitle = styled(DefaultTitle)`
  grid-column-start: 3;
  grid-column-end: 11;
  font-weight: 700;
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
    padding: 0 15px;
  }

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const ListDetail = styled.div`
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 500px));
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 500px));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const OportunityTitle = styled(DefaultTitle)`
  grid-column: 2 / 12;
  font-weight: 600;
  text-align: center;

  & b {
    font-weight: 900;
  }

  @media (max-width: 500px) {
    grid-column: 1 / 13;
  }
`;

export const ContainerButtonOportunity = styled.div`
  grid-column: 4 / 10;

  @media (max-width: 850px) {
    grid-column: 3 / 11;
  }

  @media (max-width: 600px) {
    grid-column: 2 / 12;
  }

  @media (max-width: 400px) {
    grid-column: 1 / 13;
  }
`;

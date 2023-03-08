import styled from 'styled-components';

import { DefaultSubTitle, DefaultTitle } from '../Global';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 150px);
`;

export const HomeMain = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  padding: 100px 10px;

  @media (max-width: 1024px) {
    padding: 40px 10px;
  }
`;

export const HomeTitle = styled(DefaultTitle)`
  grid-column: 1 / 13;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.yellow};
`;

export const HomeSubTitle = styled(DefaultSubTitle)`
  grid-column: 1 / 13;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.currentLine};
`;

export const HomeDescription = styled(DefaultSubTitle)`
  grid-column: 3 / 11;
  text-align: center;
  font-weight: 400;
  padding: 30px 0;
  color: ${({ theme }) => theme.currentLine};

  @media (max-width: 750px) {
    grid-column: 1 / 13;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
  grid-column: 5 / 9;

  @media (max-width: 1200px) {
    grid-column: 4 / 10;
  }

  @media (max-width: 830px) {
    grid-column: 3 / 11;
  }

  @media (max-width: 500px) {
    grid-column: 1 / 13;
  }
`;

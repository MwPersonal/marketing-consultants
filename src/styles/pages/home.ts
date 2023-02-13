import styled from 'styled-components';

export const HomeMain = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  padding: 100px 0;
`;

export const HomeTitle = styled.h1`
  font-size: 42px;
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.yellow};
`;

export const HomeDescription = styled.p`
  grid-column-start: 3;
  grid-column-end: 11;
  text-align: center;
  font-size: 25px;
  padding: 30px 0;
  color: ${({ theme }) => theme.currentLine};
`;

export const ContainerButton = styled.div`
  grid-column-start: 4;
  grid-column-end: 11;
`;

export const ContainerContent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  padding: 100px 0;
  width: 100%;
  background-color: #fff;
`;

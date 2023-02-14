import styled from 'styled-components';

export const ContainerOpportunity = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 0 40px 0;
  row-gap: 40px;
  color: ${({ theme }) => theme.currentLine};
`;

export const Title = styled.h2`
  grid-column-start: 2;
  grid-column-end: 12;
  text-align: center;
  font-size: 42px;
  font-weight: 600;

  & b {
    font-weight: 900;
  }
`;

export const Description = styled.p`
  grid-column-start: 3;
  grid-column-end: 11;
  text-align: center;
  font-size: 21px;
  font-weight: 600;
`;

export const ContainerButton = styled.div`
  grid-column-start: 4;
  grid-column-end: 10;
`;
import { DefaultSubTitle, DefaultTitle } from '@/styles/Global';
import styled from 'styled-components';

export const ContainerOpportunity = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 10px 40px 10px;
  row-gap: 40px;
  color: ${({ theme }) => theme.currentLine};
`;

export const Title = styled(DefaultTitle)`
  grid-column-start: 2;
  grid-column-end: 12;
  text-align: center;
  font-weight: 600;

  & b {
    font-weight: 900;
  }
`;

export const Description = styled(DefaultSubTitle)`
  grid-column-start: 3;
  grid-column-end: 11;
  text-align: center;
  font-weight: 600;

  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const ContainerButton = styled.div`
  grid-column-start: 4;
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

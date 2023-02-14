import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.currentLine};
  padding: 100px 0;
  row-gap: 40px;
`;

export const ListAccordion = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Description = styled.p`
  font-size: 21px;
  font-weight: 600;
  padding: 21px 18px 21px 18px;
`;

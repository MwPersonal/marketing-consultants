import styled from 'styled-components';

export const ContainerComponent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.currentLine};
  padding: 40px 0 40px 0;
  row-gap: 40px;
`;

export const Badge = styled.div`
  grid-column-start: 4;
  grid-column-end: 10;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.yellow};
  font-size: 1.35rem;
  padding: 0 15px;
  line-height: 50px;
  font-weight: 600;
  border-radius: 25px;
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

export const TitleComponent = styled.h2`
  grid-column-start: 2;
  grid-column-end: 12;
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
`;

export const AtentionTitle = styled.h1`
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
  font-weight: 900;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.selection};
`;

export const Options = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 400px));
  justify-content: center;
  list-style: none;

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const Option = styled.li`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Description = styled.p`
  grid-column-start: 3;
  grid-column-end: 11;
  font-size: 21px;
  font-weight: 600;

  @media (max-width: 500px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

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
  font-size: 25px;
  line-height: 50px;
  font-weight: 600;
  border-radius: 25px;
  text-align: center;
`;

export const TitleComponent = styled.h2`
  grid-column-start: 2;
  grid-column-end: 12;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
`;

export const Options = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
`;

export const Option = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionTitle = styled.p`
  font-size: 42px;
  line-height: 36px;
  font-weight: bold;
`;

export const OptionDescription = styled.p`
  font-size: 25px;
`;

export const Description = styled.p`
  grid-column-start: 3;
  grid-column-end: 11;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
`;

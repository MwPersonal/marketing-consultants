import {
  DefaultDescription,
  DefaultSubTitle,
  DefaultTitle,
} from '@/styles/Global';
import styled from 'styled-components';

export const ContainerComponent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.currentLine};
  padding: 40px 10px 40px 10px;
  row-gap: 40px;
`;

export const Badge = styled(DefaultSubTitle)`
  grid-column-start: 4;
  grid-column-end: 10;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.yellow};
  padding: 0 15px;
  line-height: 50px;
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

export const TitleComponent = styled(DefaultTitle)`
  grid-column-start: 2;
  grid-column-end: 12;
  text-align: center;
`;

export const Options = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: repeat(auto-fit, 180px);
  justify-content: center;
  list-style: none;
`;

export const Option = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionTitle = styled(DefaultTitle)`
  font-weight: bold;
`;

export const OptionDescription = styled(DefaultSubTitle)`
  font-weight: 400;
  text-align: center;
`;

export const Description = styled(DefaultDescription)`
  grid-column-start: 3;
  grid-column-end: 11;
  font-weight: 600;
  text-align: center;

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

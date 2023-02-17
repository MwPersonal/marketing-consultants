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

export const AtentionTitle = styled(DefaultTitle)`
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.selection};
`;

export const Options = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  list-style: none;

  @media (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Option = styled.li`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OptionText = styled(DefaultSubTitle)`
  font-weight: 600;
`;

export const Description = styled(DefaultDescription)`
  grid-column-start: 3;
  grid-column-end: 11;
  font-weight: 600;

  @media (max-width: 500px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

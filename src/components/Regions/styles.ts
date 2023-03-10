import { DefaultDescription, DefaultSubTitle } from '@/styles/Global';
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
  padding: 10px 15px;
  line-height: 24px;
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

export const ListRegions = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 30px;
  list-style: none;

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-start: 1;
    grid-column-end: 13;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const Region = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  border-radius: 15px;
  box-shadow: 0 0 15px #00000055;
  overflow: hidden;

  &:hover img {
    transform: scale(1);
    filter: brightness(85%);
  }

  & img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    transform: scale(1.1);
    transition-duration: 0.4s;
    transition-property: transform, filter;
    filter: brightness(65%);
  }
`;

export const RegionTitle = styled(DefaultDescription)`
  margin-bottom: 15px;
  border-radius: 46px;
  padding: 5px 10px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  z-index: 2;
  color: ${({ theme }) => theme.currentLine};
  background-color: ${({ theme }) => theme.orange};
`;

export const ContainerButton = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;

  @media (max-width: 900px) {
    grid-column-start: 3;
    grid-column-end: 11;
  }

  @media (max-width: 400px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

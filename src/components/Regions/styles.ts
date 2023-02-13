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

export const ListRegions = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 30px;
  list-style: none;
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
    border-radius: 15px;
    transform: scale(1.1);
    transition-duration: 0.4s;
    transition-property: transform, filter;
    filter: brightness(65%);
  }
`;

export const RegionTitle = styled.p`
  width: calc(100% - 30px);
  margin-bottom: 15px;
  font-size: 21px;
  border-radius: 46px;
  line-height: 46px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  z-index: 2;
  color: ${({ theme }) => theme.currentLine};
  background-color: ${({ theme }) => theme.orange};
`;

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.currentLine};
  padding: 40px 0 40px 0;
  row-gap: 40px;
`;

export const Title = styled.h2`
  grid-column-start: 2;
  grid-column-end: 12;
  text-align: center;
  font-size: 42px;
  font-weight: 600;
`;

export const ListStep = styled.ul`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  gap: 30px;
  justify-content: center;
  list-style: none;
`;

export const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerImage = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.yellow};
`;

export const StepImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  opacity: 0.6;
`;

export const StepTitle = styled.h3`
  font-size: 21px;
  text-align: center;
`;

export const StepDescription = styled.p`
  font-size: 21px;
  font-weight: 500;
`;

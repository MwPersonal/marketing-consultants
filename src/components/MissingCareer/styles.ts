import { DefaultDescription, DefaultTitle } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  gap: 30px;

  @media (max-width: 350px) {
    gap: 0;
    row-gap: 20px;
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const Title = styled(DefaultTitle)`
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
`;

export const ImageRepresent = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 6;

  & img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 0 15px #00000055;
  }

  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const ContainerContent = styled.div`
  grid-column-start: 6;
  grid-column-end: 13;
  display: flex;

  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

export const Description = styled(DefaultDescription)`
  white-space: pre-wrap;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

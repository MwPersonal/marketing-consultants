import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  gap: 30px;
`;

export const Title = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;
  font-size: 42px;
  font-weight: 600;
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
`;

export const ContainerContent = styled.div`
  grid-column-start: 6;
  grid-column-end: 13;
  display: flex;
`;

export const Description = styled.p`
  white-space: pre-wrap;
  font-size: 21px;
`;

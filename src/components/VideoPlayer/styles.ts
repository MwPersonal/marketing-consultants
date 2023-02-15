import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components';

export const Play = styled(FaPlay)`
  position: absolute;
  opacity: 0.75;
  transition: 0.2s opacity;
`;

export const ImageBackground = styled(Image)`
  height: auto;
  width: 100%;
  border-radius: 15px;
  filter: brightness(45%);
  transition: 0.4s filter;
  box-shadow: 0 0 65px #00000055;
`;

export const ContainerVideoPlayer = styled.div`
  width: 100%;
  position: relative;
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${Play} {
    opacity: 1;
  }

  &:hover ${ImageBackground} {
    filter: brightness(40%);
  }

  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 13;
  }
`;

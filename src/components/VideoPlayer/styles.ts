import { DefaultSubTitle } from '@/styles/Global';
import Image from 'next/image';
import { FaPlay, FaTimes } from 'react-icons/fa';
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

export const PortalModal = styled.div`
  & .rodal-dialog {
    width: 55% !important;
    height: fit-content !important;

    @media (max-width: 1500px) {
      width: 65% !important;
    }

    @media (max-width: 1400px) {
      width: 75% !important;
    }

    @media (max-width: 1100px) {
      width: 90% !important;
    }

    @media (max-width: 900px) {
      width: 98% !important;
    }
  }
`;

export const HeaderModal = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding: 35px;
  background-color: ${({ theme }) => theme.yellow};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media (max-width: 800px) {
    height: auto;
    padding: 20px;
    gap: 15px;
  }
`;

export const Title = styled(DefaultSubTitle)`
  flex: 1;
  font-weight: 900;
  align-self: center;
  text-align: center;
`;

export const CloseButton = styled(FaTimes)`
  margin: 0 20px;
  cursor: pointer;
  width: 20px;

  @media (max-width: 750px) {
    width: 15px;
  }

  @media (max-width: 600px) {
    width: 15px;
  }

  @media (max-width: 500px) {
    width: 15px;
  }
`;

export const ContainerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & iframe {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

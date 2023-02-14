import { BsCaretDownFill } from 'react-icons/bs';
import styled from 'styled-components';

interface TContainer {
  isOpened: boolean;
  height: number;
}

export const ContainerBody = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: 0.4s filter;
`;

export const Indicator = styled(BsCaretDownFill)``;

export const Container = styled.div<TContainer>`
  width: 100%;
  background-color: ${({ theme }) => theme.yellow};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  & ${ContainerBody} {
    transition: 0.3s height;
    height: ${({ isOpened, height }) => (isOpened ? height : 0)}px;
    overflow: hidden;
  }

  & ${Indicator} {
    transition: 0.3s transform;
    transform: rotate(${({ isOpened }) => (isOpened ? `0` : `-90deg`)});
  }
`;

export const ContainerHeader = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 12px 18px;
  gap: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: 0.4s filter;

  &:hover {
    filter: brightness(75%);
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.currentLine};
  font-size: 25px;
  font-weight: 600;
`;

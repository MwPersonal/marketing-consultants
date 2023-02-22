import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  position: fixed;
  width: 72px;
  height: 72px;
  border-radius: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 24px;
  bottom: 24px;
  background-color: #25d366;
  box-shadow: 0 0 20px #00000055;
  transition-duration: 0.4s;
  transition-property: filter, box-shadow;

  &:hover {
    box-shadow: 0 0 25px #000000aa;
    filter: brightness(75%);
  }

  &:active {
    filter: brightness(125%);
  }
`;

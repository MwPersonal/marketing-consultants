import { DefaultSubTitle } from '@/styles/Global';

import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.orange};
  box-shadow: 0 0 50px ${({ theme }) => theme.orange}77;
  border-radius: 136px;
  width: 100%;
  padding: 30px;
  border: 0;
  cursor: pointer;
  transition: 0.2s filter;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const ButtonText = styled(DefaultSubTitle)`
  color: ${({ theme }) => theme.currentLine};
  font-weight: 900;

  @media (max-width: 450px) {
    font-weight: 700;
  }
`;

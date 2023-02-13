import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.orange};
  box-shadow: 0 0 50px ${({ theme }) => theme.orange}77;
  border-radius: 136px;
  font-size: 42px;
  font-weight: 900;
  color: ${({ theme }) => theme.currentLine};
  width: 100%;
  padding: 30px 20px;
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

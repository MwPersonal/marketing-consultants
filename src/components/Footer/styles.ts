import styled from 'styled-components';

export const Container = styled.footer`
  padding: 40px;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.foreground};
    transition: 0.4s filter;

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  opacity: 0.7;
  cursor: pointer;
  text-align: center;
`;

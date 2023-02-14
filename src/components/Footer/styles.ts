import styled from 'styled-components';

export const Container = styled.footer`
  padding: 40px;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 25px;
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  opacity: 0.7;
`;

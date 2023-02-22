import { DefaultDescription, DefaultSubTitle } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailTitle = styled(DefaultDescription)`
  width: 100%;
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.yellow};
  padding: 20px 0;
  border-radius: 60px;
`;

export const DetailContent = styled(DefaultDescription)`
  text-align: center;
  padding: 20px;
  font-weight: 500;
`;

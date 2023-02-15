import { DefaultDescription, DefaultSubTitle } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: center;
  gap: 50px;
  margin: 60px 0;

  @media (max-width: 1200px) {
    grid-column: 1 / 13;
    gap: 15px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, minmax(0, 600px));
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  gap: 21px;
  color: ${({ theme }) => theme.currentLine};
`;

export const BenefitIcon = styled.div`
  background-color: ${({ theme }) => theme.orange};
  width: 46px;
  height: 46px;
  padding: 10px;
  box-sizing: content-box;
  border-radius: 100px;
`;

export const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BenefitTitle = styled(DefaultDescription)`
  /* font-size: 18px; */
  font-weight: bold;
`;

export const BenefitDescription = styled(DefaultDescription)`
  font-weight: 500;
  color: ${({ theme }) => theme.currentLine};
`;

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { DefaultDescription, DefaultSubTitle, DefaultTitle } from '../Global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 150px);
`;

export const HomeMain = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  gap: 20px;
  padding: 0 10px 100px 10px;

  @media (max-width: 1024px) {
    padding: 40px 10px;
  }
`;

export const HomeLogo = styled(Image)`
  position: relative;

  @media (max-width: 425px) {
    width: 80%;
    height: auto;
  }
`;

export const HomeTitle = styled(DefaultTitle)`
  grid-column: 1 / 13;
  text-align: center;
  font-weight: 900;
  color: ${({ theme }) => theme.yellow};
`;

export const HomeDescription = styled(DefaultSubTitle)`
  grid-column: 3 / 11;
  text-align: center;
  font-weight: 400;
  padding: 30px 0;
  color: ${({ theme }) => theme.currentLine};

  @media (max-width: 750px) {
    grid-column: 1 / 13;
  }
`;

export const ContainerButton = styled(Link)`
  width: 80%;
  margin-top: 20px;
`;

export const ContainerBar = styled.div`
  grid-column: 1 / 13;
  color: ${({ theme }) => theme.currentLine};
  margin-bottom: 80px;
`;

export const ContainerCard = styled.div`
  grid-column: span 6;
  gap: 20px;
  background-color: ${({ theme }) => theme.selection}88;
  color: ${({ theme }) => theme.currentLine};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  border-radius: 35px;

  @media (max-width: 900px) {
    grid-column: span 12;
  }
  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export const CardTitle = styled(DefaultTitle)`
  text-align: center;
`;

export const CardSubTitle = styled(DefaultSubTitle)`
  color: ${({ theme }) => theme.yellow};
`;

export const CardContent = styled(DefaultDescription)``;

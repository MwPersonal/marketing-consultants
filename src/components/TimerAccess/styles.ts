import styled from 'styled-components';

import { ColumnLayout } from '@/styles/Global';

export const Container = styled.div`
  /* width: 80%; */
  grid-column-start: 1;
  grid-column-end: 13;
  border-radius: 50px;
  padding: 60px;
  box-shadow: 0 0 65px #00000055;
  background-color: ${({ theme }) => theme.currentLine};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 42px;
`;

export const TextDescription = styled.p`
  margin-top: 40px;
  text-align: center;
  width: 66.66%;
  font-size: 21px;
  font-weight: 600;
`;

export const ContainerTimes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 42px;
  margin-top: 40px;
  gap: 25px;
`;

export const ContainerTiming = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const TimingText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 175px;
  border-radius: 175px;
  font-size: 68px;
  font-weight: 600;
  border: 5px solid ${({ theme }) => theme.selection};
`;

export const TimingLegend = styled.p`
  font-size: 21px;
  text-transform: uppercase;
`;

export const ContainerButton = styled.div`
  max-width: 770px;
`;

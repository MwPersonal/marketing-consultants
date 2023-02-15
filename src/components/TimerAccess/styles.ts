import {
  DefaultDescription,
  DefaultSubTitle,
  DefaultTitle,
} from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
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

  @media (max-width: 600px) {
    padding: 30px;
  }

  @media (max-width: 350px) {
    padding: 30px 10px;
  }
`;

export const Title = styled(DefaultTitle)`
  text-transform: uppercase;
  text-align: center;
  /* font-weight: 600; */
`;

export const TextDescription = styled(DefaultDescription)`
  margin-top: 40px;
  text-align: center;
  width: 66.66%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerTimes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 40px;
  gap: 25px;

  @media (max-width: 470px) {
    display: none;
  }
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
  width: 160px;
  height: 160px;
  border-radius: 160px;
  font-size: 3rem;
  font-weight: 600;
  border: 5px solid ${({ theme }) => theme.selection};
`;

export const TimingLegend = styled(DefaultDescription)`
  text-transform: uppercase;
`;

export const ContainerButton = styled.div`
  max-width: 770px;
  margin-top: 40px;
`;

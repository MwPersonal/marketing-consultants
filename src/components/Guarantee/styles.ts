import { DefaultDescription, DefaultTitle } from '@/styles/Global';

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(12, minmax(0, 100px));
  column-gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 10px 144px 10px;
  row-gap: 40px;
  color: ${({ theme }) => theme.currentLine};

  @media (max-width: 500px) {
    padding: 40px 10px 40px 10px;
  }
`;

export const Title = styled(DefaultTitle)`
  grid-column-start: 1;
  grid-column-end: 13;
  text-align: center;
`;

export const Description = styled(DefaultDescription)`
  font-weight: 500;
`;

export const ContainerContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 2fr;

  & img {
    width: 100%;
    max-width: 400px;
    margin: auto;
    height: auto;
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    grid-column-start: 1;
    grid-column-end: 13;

    & ${Description} {
      text-align: center;
    }
  }
`;

export const ContainerForm = styled.form`
  grid-column-start: 1;
  grid-column-end: 13;
  background-color: ${({ theme }) => theme.currentLine};
  padding: 60px 111px;
  border-radius: 60px;
  color: ${({ theme }) => theme.background};
  box-shadow: 0 0 65px #00000055;

  @media (max-width: 830px) {
    padding: 40px;
  }

  @media (max-width: 450px) {
    padding: 40px 20px;
  }
`;

export const Completed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CompletedText = styled.p`
  font-size: 18px;

  & span {
    font-size: 18px;
  }
`;

interface TCompletedBar {
  porcentage: number;
}

export const CompletedBar = styled.div<TCompletedBar>`
  width: 50%;
  height: 15px;
  background-color: ${({ theme }) => theme.comment};
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  @keyframes widthStart {
    from {
      width: 0;
    }
    to {
      width: ${({ porcentage }) => porcentage}%;
    }
  }

  &::before {
    content: '';
    left: 0;
    top: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    display: block;
    height: 15px;
    background-color: ${({ theme }) => theme.orange};
    width: ${({ porcentage }) => porcentage}%;
    animation: widthStart 3s ease-in-out;
  }

  @media (max-width: 500px) {
    width: 75%;
  }

  @media (max-width: 350px) {
    width: 95%;
  }
`;

export const DescriptionForm = styled(DefaultDescription)`
  font-weight: 600;
  margin: 30px 0;

  & b {
    font-weight: 900;
  }
`;

export const ListInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 15px;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.yellow};
  cursor: pointer;
  padding: 23px 0;
  border-radius: 90px;
  border: 0;
  box-shadow: 0 0 15px #00000033;
  transition-duration: 0.4s;
  transition-property: filter box-shadow;

  &:hover {
    filter: brightness(85%);
    box-shadow: 0 0 20px #00000055;
  }
`;

export const ButtonText = styled(DefaultTitle)`
  font-weight: 900;
`;

import { DefaultSubTitle } from '@/styles/Global';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const PortalModal = styled.div`
  & .rodal-dialog {
    width: 55% !important;
    height: fit-content !important;

    @media (max-width: 1500px) {
      width: 65% !important;
    }

    @media (max-width: 1400px) {
      width: 75% !important;
    }

    @media (max-width: 1100px) {
      width: 90% !important;
    }

    @media (max-width: 900px) {
      width: 98% !important;
    }
  }
`;

export const HeaderModal = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding: 35px;
  background-color: ${({ theme }) => theme.yellow};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media (max-width: 800px) {
    height: auto;
    padding: 20px;
    gap: 15px;
  }
`;

export const Title = styled(DefaultSubTitle)`
  flex: 1;
  font-weight: 900;
  align-self: center;
  text-align: center;
`;

export const CloseButton = styled(FaTimes)`
  margin: 0 20px;
  cursor: pointer;
  width: 20px;

  @media (max-width: 750px) {
    width: 15px;
  }

  @media (max-width: 600px) {
    width: 15px;
  }

  @media (max-width: 500px) {
    width: 15px;
  }
`;

export const ContainerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 144px;
  gap: 40px;

  @media (max-width: 800px) {
    padding: 40px;
  }

  @media (max-width: 550px) {
    gap: 20px;
    padding: 20px;
  }
`;

export const Content = styled(DefaultSubTitle)`
  text-align: center;
  font-weight: 600;

  & b {
    font-weight: 900;
  }
`;

export const ContainerButton = styled.div`
  width: 75%;
  align-self: center;

  @media (max-width: 1300px) {
    width: 100% !important;
  }
`;

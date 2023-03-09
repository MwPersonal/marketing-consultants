import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 18px;

  & span {
    font-size: 18px;
  }
`;

interface TCompletedBar {
  porcentage: number;
}

const slide = keyframes`
  from  { background-position: 0 0; }
  to    { background-position: 40px 0; }
`;

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
    display: block;
    height: 15px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: ${({ porcentage }) => porcentage}%;
    background-size: 40px 40px;
    background-color: ${({ theme }) => theme.yellow};
    background-image: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.05) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 50%,
      rgba(0, 0, 0, 0.05) 75%,
      transparent 75%,
      transparent
    );
    animation: widthStart 3s ease-in-out, 0.5s linear infinite ${slide};
  }

  @media (max-width: 500px) {
    width: 75%;
  }

  @media (max-width: 350px) {
    width: 95%;
  }
`;

import styled from 'styled-components';

export const ContainerVideoPlayer = styled.div`
  width: 100%;
  position: relative;
  grid-column: 2 / 12;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  aspect-ratio: 16 / 9;

  & iframe {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 700px) {
    grid-column: 1 / 13;
  }
`;

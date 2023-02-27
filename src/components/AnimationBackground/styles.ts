import Particles from 'react-tsparticles';
import styled from 'styled-components';

export const AnimationParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

  & canvas {
    top: 0 !important;
  }
`;

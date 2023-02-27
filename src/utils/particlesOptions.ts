// import type { ISourceOptions } from 'tsparticles-engine';

export const particlesOptions = {
  fullScreen: false,
  fpsLimit: 75,
  particles: {
    color: {
      value: `#1B1B1B`,
    },
    links: {
      color: `#5F5F5F`,
      distance: 300,
      enable: true,
      opacity: 0.25,
      width: 2,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: `none`,
      enable: true,
      outModes: {
        default: `bounce`,
      },
      random: true,
      speed: 5,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 20,
      },
      value: 1,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: `square`,
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  // detectRetina: false,
};

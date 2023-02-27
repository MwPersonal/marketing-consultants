import { particlesOptions } from '@/utils/particlesOptions';
import { loadFull } from 'tsparticles';
import { AnimationParticles } from './styles';

const AnimationBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesLoaded = (container?: any) => {
    container.canvas.element.style.top = 0;
  };

  return (
    <AnimationParticles
      id="tsparticles"
      loaded={particlesLoaded as any}
      init={particlesInit}
      options={particlesOptions as any}
    />
  );
};

export default AnimationBackground;

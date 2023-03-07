import { useState } from 'react';
import { useTheme } from 'styled-components';
import ModalPlayer from './ModalPlayer';

import { ContainerVideoPlayer, ImageBackground, Play } from './styles';

const VideoPlayer: React.FC<{
  thumbnail: string | any;
  link?: string;
  title?: string;
}> = ({ thumbnail, link, title }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ContainerVideoPlayer onClick={() => setIsVisible(true)}>
        <ImageBackground
          src={thumbnail}
          alt="Thumbnail video"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <Play size={82} color={theme.yellow} />
      </ContainerVideoPlayer>
      {link && title && (
        <ModalPlayer
          link={link}
          title={title}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default VideoPlayer;

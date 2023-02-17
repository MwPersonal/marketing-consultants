import { useTheme } from 'styled-components';

import { ContainerVideoPlayer, ImageBackground, Play } from './styles';

const VideoPlayer: React.FC<{
  thumbnail: string | any;
}> = ({ thumbnail }) => {
  const theme = useTheme();

  return (
    <ContainerVideoPlayer>
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
  );
};

export default VideoPlayer;

import { useTheme } from 'styled-components';

import { ContainerVideoPlayer, ImageBackground, Play } from './styles';

const VideoPlayer: React.FC<{
  thumbnail: string | any;
}> = ({ thumbnail }) => {
  const theme = useTheme();

  return (
    <ContainerVideoPlayer>
      <ImageBackground src={thumbnail} alt="Thumbnail video" />
      <Play size={82} color={theme.yellow} />
    </ContainerVideoPlayer>
  );
};

export default VideoPlayer;

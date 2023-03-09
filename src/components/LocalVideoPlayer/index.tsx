import { ContainerVideoPlayer } from './styles';

const LocalVideoPlayer: React.FC<{
  link: string;
}> = ({ link }) => {
  return (
    <>
      <ContainerVideoPlayer>
        <iframe
          id="panda-038868bb-eec4-4c32-ae17-a75a740e2b0c"
          src={link}
          loading="lazy"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerVideoPlayer>
    </>
  );
};

export default LocalVideoPlayer;

import { ContainerTiming, TimingLegend, TimingText } from './styles';

const Timer: React.FC<{
  text: string;
  legend: string;
}> = ({ text, legend }) => {
  return (
    <ContainerTiming>
      <TimingText>{text}</TimingText>
      <TimingLegend>{legend}</TimingLegend>
    </ContainerTiming>
  );
};

export default Timer;

import { Container, CompletedBar, Text } from './styles';

import CounterNumberCrescent from '../CounterNumberCrescent';

const LoadingBar: React.FC<{
  text: string;
  duration: number;
  number: number;
}> = ({ duration, text, number }) => {
  return (
    <Container>
      <Text>
        <b>
          <CounterNumberCrescent duration={duration} number={number} />%
        </b>
        {text}
      </Text>
      <CompletedBar porcentage={number} />
    </Container>
  );
};

export default LoadingBar;

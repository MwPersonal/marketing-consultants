import { useEffect, useMemo, useState } from 'react';
import {
  Duration,
  formatDistance,
  intervalToDuration,
  subDays,
} from 'date-fns';

import {
  AboutMore,
  Container,
  ContainerTimes,
  TextDescription,
  Title,
} from './styles';

import Timer from './Timer';

const TimerAccess: React.FC = () => {
  // const [timerState, setTimerState] = useState(new Date());
  const [intervalDuration, setIntervalDuration] = useState<Duration | null>(
    null,
  );
  const timerEnd = useMemo(() => new Date(2023, 3, 1, 0, 0, 0, 0), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalDuration(
        intervalToDuration({
          start: new Date(),
          end: timerEnd,
        }),
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerEnd]);

  return (
    <Container>
      <Title>INSCRIÇÕES POR TEMPO LIMITADO</Title>
      <ContainerTimes>
        <Timer text={String(intervalDuration?.days || 0)} legend="DIAS" />
        <Timer text={String(intervalDuration?.hours || 0)} legend="HORAS" />
        <Timer text={String(intervalDuration?.minutes || 0)} legend="MINUTOS" />
        <Timer
          text={String(intervalDuration?.seconds || 0)}
          legend="SEGUNDOS"
        />
      </ContainerTimes>
      <TextDescription>
        Estamos selecionando pessoas interessadas em uma nova profissão, e por
        isso, estamos oferecendo uma formação que custa R$6.000,00 de forma
        GRATUITA e por tempo TEMPO LIMITADO para dar oportunidade para quem está
        buscando uma nova fase profissional em sua vida.
      </TextDescription>
      <AboutMore>QUERO SABER MAIS SOBRE A OPORTUNIDADE</AboutMore>
    </Container>
  );
};

export default TimerAccess;

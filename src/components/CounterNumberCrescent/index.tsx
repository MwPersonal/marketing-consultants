import { useEffect, useRef } from 'react';

import { CounterNumber } from './styles';

const CounterNumberCrescent: React.FC<{
  number: number;
  duration?: number;
}> = ({ number, duration = 5 }) => {
  const counterNumber = useRef(null);

  useEffect(() => {
    (counterNumber?.current as any)?.style.setProperty(`--num`, 0);
    if (counterNumber?.current) {
      setTimeout(() => {
        (counterNumber?.current as any)?.style.setProperty(`--num`, number);
      }, 10);
    }
  }, [number]);

  return (
    <CounterNumber ref={counterNumber} number={number} duration={duration} />
  );
};

export default CounterNumberCrescent;

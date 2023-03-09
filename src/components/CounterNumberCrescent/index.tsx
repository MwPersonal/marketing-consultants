import AnimatedNumber from 'animated-number-react';

const CounterNumberCrescent: React.FC<{
  number: number;
  duration?: number;
}> = ({ number, duration = 5 }) => {
  const formatValue = (value: number) => Math.floor(value);

  return (
    <AnimatedNumber
      value={number}
      formatValue={formatValue}
      duration={duration * 1000}
    />
  );
};

export default CounterNumberCrescent;

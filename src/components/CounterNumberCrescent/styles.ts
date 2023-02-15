import styled from 'styled-components';

interface TCounter {
  number: number;
  duration: number;
}

export const CounterNumber = styled.span<TCounter>`
  @property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }

  transition: --num ${({ duration }) => duration}s;
  counter-set: num var(--num);

  &::after {
    content: counter(num);
  }
`;

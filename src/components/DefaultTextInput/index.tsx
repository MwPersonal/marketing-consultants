import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ContainerInput, Input, Label } from './styles';

interface TDefaultTextInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const DefaultTextInput: React.FC<TDefaultTextInput> = ({ label, ...props }) => {
  return (
    <ContainerInput>
      {label && <Label>{label}</Label>}
      <Input {...(props as any)} />
    </ContainerInput>
  );
};

export default DefaultTextInput;

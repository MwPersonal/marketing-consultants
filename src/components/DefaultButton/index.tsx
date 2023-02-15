import type { ReactNode } from 'react';

import { Button, ButtonText } from './styles';

const DefaultButton: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Button>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default DefaultButton;

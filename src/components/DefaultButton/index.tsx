import type { ReactNode } from 'react';

import { Button } from './styles';

const DefaultButton: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default DefaultButton;

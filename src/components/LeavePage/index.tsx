import { useEffect, useState } from 'react';
import Rodal from 'rodal';

import { useDebouncedCallback } from 'use-debounce';

import DefaultButton from '../DefaultButton';

import {
  CloseButton,
  ContainerButton,
  ContainerContent,
  Content,
  HeaderModal,
  PortalModal,
  Title,
} from './styles';

const LeavePage: React.FC = () => {
  const [leavingState, setLeavingState] = useState(false);

  const onMouseLeave = useDebouncedCallback(
    () => setLeavingState(true),
    5 * 60 * 1000,
    { maxWait: 5 * 60 * 1000, leading: true },
  );

  const onClose = () => setLeavingState(false);

  useEffect(() => {
    if (document) {
      document.onmouseleave = (event) => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        )
          onMouseLeave();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PortalModal>
      <Rodal
        customStyles={{
          padding: 0,
          borderRadius: 30,
          display: `flex`,
          flexDirection: `column`,
        }}
        className="leave-page"
        showCloseButton={false}
        visible={leavingState}
        onClose={onClose}
        closeOnEsc={true}
      >
        <HeaderModal>
          <Title>Essa é a preocupação que você tem com seu futuro?</Title>
          <CloseButton size={32} onClick={onClose} />
        </HeaderModal>
        <ContainerContent>
          <Content>
            Se você acredita que <b>a vida é muito mais que pagar boletos</b>,
            preencha o formulário que nós te daremos todos os passos para você
            construir uma carreira de sucesso!
          </Content>
          <ContainerButton>
            <DefaultButton>QUERO AUMENTAR MINHA RENDA</DefaultButton>
          </ContainerButton>
        </ContainerContent>
      </Rodal>
    </PortalModal>
  );
};

export default LeavePage;

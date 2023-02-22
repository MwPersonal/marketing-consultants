import Rodal from 'rodal';

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

const LeavePage: React.FC<{
  isVisible: boolean;
  onClose?: () => void;
}> = ({ isVisible, onClose }) => {
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
        visible={isVisible}
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

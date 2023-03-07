import Rodal from 'rodal';

import Portal from '../Portal';

import {
  CloseButton,
  ContainerContent,
  HeaderModal,
  PortalModal,
  Title,
} from './styles';

const ModalPlayer: React.FC<{
  isVisible: boolean;
  onClose?: () => void;
  title: string;
  link: string;
}> = ({ isVisible, title, link, onClose }) => {
  return (
    <Portal>
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
            <Title>{title}</Title>
            <CloseButton size={32} onClick={onClose} />
          </HeaderModal>
          <ContainerContent>
            <iframe
              src={link}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </ContainerContent>
        </Rodal>
      </PortalModal>
    </Portal>
  );
};

export default ModalPlayer;

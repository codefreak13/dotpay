import React, {FC} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

const ModalWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  max-height: 350px;
  flex: 1;
  border-radius: 10px;
  padding-top: 20px;
`;

const ModalBody = styled.View`
  margin: 20px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

type ModalProps = {
  toggleModal: () => void;
  isVisible: boolean | undefined;
  title: string;
  content: React.ReactNode;
};

const DotPayModal: FC<ModalProps> = ({
  isVisible,
  toggleModal,
  title,
  content,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={true}
      style={{margin: 20}}
      onBackButtonPress={() => {
        toggleModal();
      }}
      onBackdropPress={() => {
        toggleModal();
      }}
      animationIn="slideInUp"
      animationInTiming={350}
      coverScreen={true}
      animationOut="slideOutDown"
      useNativeDriver={true}>
      <ModalWrapper>
        <HeaderText>{title}</HeaderText>
        <ModalBody>{content}</ModalBody>
      </ModalWrapper>
    </Modal>
  );
};

export default DotPayModal;

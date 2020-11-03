import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
} from './Modal.styles';

interface ModalProps {
  title?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({ title, children, width }) => {
  return (
    <ModalContainer>
      <ModalContent width={width}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

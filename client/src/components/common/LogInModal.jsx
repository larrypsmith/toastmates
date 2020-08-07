import React from 'react';
import ModalContent from './ModalContent';
import AuthModalContent from './AuthModalContent';

const LoginModal = () => (
  <ModalContent onClick={e => e.stopPropagation()}>
    <AuthModalContent modalType={'login'} />
  </ModalContent>
);

export default LoginModal;
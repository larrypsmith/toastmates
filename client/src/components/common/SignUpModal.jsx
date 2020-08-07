import React from 'react';
import ModalContent from './ModalContent';
import AuthModalContent from './AuthModalContent';

const SignUpModal = () => (
  <ModalContent onClick={e => e.stopPropagation()}>
    <AuthModalContent modalType={'signup'} />
  </ModalContent>
);

export default SignUpModal;
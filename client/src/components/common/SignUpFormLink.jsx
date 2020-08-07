import React from 'react';
import OtherFormLink from './OtherFormLink';
import useOpenModal from '../../hooks/useOpenModal.js';
import SignUpModal from '../common/SignUpModal';

const SignUpFormLink = () => {
  const openSignUpForm = useOpenModal(SignUpModal);
  
  return(
    <OtherFormLink
      question='New to Toastmates?'
      linkText='Sign Up'
      onClickLink={openSignUpForm}
    />
  )
};

export default SignUpFormLink;
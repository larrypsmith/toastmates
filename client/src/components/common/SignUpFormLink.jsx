import React from 'react';
import OtherFormLink from './OtherFormLink';
import useOpenModal from '../../hooks/useOpenModal.js';

const SignUpFormLink = () => {
  const openSignUpForm = useOpenModal('signup');
  
  return(
    <OtherFormLink
      question='New to Toastmates?'
      linkText='Sign Up'
      onClickLink={openSignUpForm}
    />
  )
};

export default SignUpFormLink;
import React from 'react';
import OtherFormLink from './OtherFormLink';
import useOpenModal from '../../hooks/useOpenModal.js';

const SignUpFormLink = () => {
  const openLoginForm = useOpenModal('login');
  
  return(
    <OtherFormLink
      question='Already have an account?'
      linkText='Log In'
      onClickLink={openLoginForm}
    />
  )
};

export default SignUpFormLink;
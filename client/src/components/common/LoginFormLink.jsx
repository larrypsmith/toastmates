import React from 'react';
import OtherFormLink from './OtherFormLink';
import useOpenModal from '../../hooks/useOpenModal.js';
import LogInModal from '../common/LogInModal';

const SignUpFormLink = () => {
  const openLoginForm = useOpenModal(LogInModal);
  
  return(
    <OtherFormLink
      question='Already have an account?'
      linkText='Log In'
      onClickLink={openLoginForm}
    />
  )
};

export default SignUpFormLink;
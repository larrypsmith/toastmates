import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';
import useQueryModal from '../../hooks/useQueryModal';

const AuthForm = () => {
  const modalType = useQueryModal();

  return (
    
  )
};

export default AuthForm;

const StyledAuthForm = styled.form`
  width: 100%;
  padding-bottom: 91px;
`;

const StyledInstructions = styled.div`
  padding-bottom: 40px;
`;

const Instructions = () => (
  <StyledInstructions>
    <Typography></Typography>
  </StyledInstructions>
)
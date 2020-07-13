import React from 'react';
import styled from 'styled-components/macro';
import { StyledLogInButton } from './LogInButton';
import Typography from '../common/Typography';

const StyledSignUpButton = styled(StyledLogInButton)`
  color: ${props => props.theme.palette.secondary.main};
  background-color: ${props => props.theme.palette.common.black};
  margin-right: 0;
`;

function SignUpButton() {
  return (
    <StyledSignUpButton>
      <Typography size='12px' uppercase>
        Sign Up
      </Typography>
    </StyledSignUpButton>
  );
};

export default SignUpButton;
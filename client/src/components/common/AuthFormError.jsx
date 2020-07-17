import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';

const AuthFormError = ({ error, ...props }) => {
  if (!error) return null;
  return (
    <StyledAuthFormError
      weight={500}
      size='12px'
      {...props}
    >
      {error}
    </StyledAuthFormError>
  )
};

export default AuthFormError;

const StyledAuthFormError = styled(Typography)`
  color: ${props => props.theme.palette.error};
  letter-spacing: -0.1px;
  line-height: normal;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;
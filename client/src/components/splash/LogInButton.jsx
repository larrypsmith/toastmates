import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';

export const StyledLogInButton = styled.button`
  height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  color: ${props => props.theme.palette.common.black};
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-width: 86px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: .5px;
  margin-right: 10px;
  overflow: hidden;
`;

function LogInButton() {
  return (
    <StyledLogInButton>
      <Typography size='12px' uppercase>
        Log In
      </Typography>
    </StyledLogInButton>
  )
};

export default LogInButton;
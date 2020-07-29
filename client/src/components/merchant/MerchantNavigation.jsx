import React from 'react';
import styled from 'styled-components/macro';
import Navigation from '../common/Navigation';
import LoginButton from '../common/LogInButton';
import SignUpButton from '../common/SignUpButton';

const MerchantNavigation = ({ buttons, ...props }) => {
  return (
    <Navigation container={StyledMerchantNavigation} {...props}>
      <StyledLoginButton />
      <StyledSignUpButton />
    </Navigation>
  )
};

export default MerchantNavigation;

const StyledMerchantNavigation = styled.nav`
  position: sticky;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 300;
  background-color: rgb(254, 255, 255);
  transition: background-color 0.2s ease-in-out 0s;
`;

const StyledLoginButton = styled(LoginButton)`
  color: ${props => props.theme.palette.text.primary};
  background-color: transparent;
`;

const StyledSignUpButton = styled(SignUpButton)`
  color: ${props => props.theme.palette.common.white};
  background-color: ${props => props.theme.palette.text.primary};
  margin-left: 10px;
`;
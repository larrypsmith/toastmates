import React from 'react';
import styled from 'styled-components/macro';
import Navigation from '../common/Navigation';
import LoginButton from '../common/LogInButton';
import SignUpButton from '../common/SignUpButton';

const SplashNavigation = ({ buttons, ...props }) => {
  return (
    <Navigation container={StyledSplashNavigation}>
      <StyledLoginButton />
      <StyledSignUpButton />
    </Navigation>
  )
};

export default SplashNavigation;

const StyledSplashNavigation = styled.nav`
  position: relative;
  background-color: ${props => props.theme.palette.secondary.main};
  width: 100%;
`;

const StyledLoginButton = styled(LoginButton)`
  color: ${props => props.theme.palette.common.black};
  background-color: transparent;
`;

const StyledSignUpButton = styled(SignUpButton)`
  color: #FFDF18;
  background-color: ${props => props.theme.palette.common.black};
  margin-left: 10px;
`;
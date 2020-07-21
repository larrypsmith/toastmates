import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import Container from './Container';
import Flex from './Flex';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import Typography from './Typography';
import UserIcon from './UserIcon';

function Navigation() {
  return (
    <StyledNavigation>
      <Container padding={[25, 54, 36]}>
        <StyledFlex parent>
          <StyledFlexChildLeft child>
            <Typography
              weight='500'
              size='20px'
              color='black'
            >
              Toastmates
            </Typography>
          </StyledFlexChildLeft>
          <StyledFlexChildRight child>
            <LogInButton />
            <Route exact path='/'>
              <SignUpButton />
            </Route>
            <UserIcon />
          </StyledFlexChildRight>
        </StyledFlex>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  background-color: ${props => props.theme.palette.secondary.main};
  width: 100vw;
`;

const StyledFlex = styled(Flex)`
  min-height: 72px;
  transition: min-height 0.2s ease-in-out;
  width: 100%;
`;

const StyledFlexChildLeft = styled(Flex)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  width: auto;
`;

const StyledFlexChildRight = styled(Flex)`
  width: auto;
  display: flex;
  flex: auto;
  justify-content: flex-end;
  align-items: center;
`;


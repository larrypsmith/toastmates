import React from 'react';
import styled from 'styled-components/macro';
import Container from './Container';
import FlexContainer from './FlexContainer';
import FlexChild from './FlexChild';
import LogInButton from './LogInButton';
import Typography from './Typography';
import SignUpButton from './SignUpButton';

const StyledNavigation = styled.nav`
  background-color: ${props => props.theme.palette.secondary.main};
  width: 100vw;
`;

const NavFlexContainer = styled(FlexContainer)`
  min-height: 72px;
  overflow: scroll;
  @media screen and (max-width: 1059px) and (min-width: 768px) {
    padding-left: 54px;
    padding-right: 54px;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Container maxWidth='1024px'>
        <NavFlexContainer justifyContent='space-between' alignItems='center'>
          <FlexChild>
            <Typography weight='500' size='20px'>
              Toastmates
            </Typography>
          </FlexChild>
          <FlexChild>
            <LogInButton />
            <SignUpButton />
          </FlexChild>
        </NavFlexContainer>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { useLocation, useRouteMatch, useParams } from 'react-router-dom';
import Container from './Container';
import Flex from './Flex';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import Typography from './Typography';
import UserIcon from './UserIcon';

const Navigation = (props) => {
  const location = useLocation();

  return (
    <StyledNavigation location={location} {...props}>
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
            <SignUpButton />
            <UserIcon />
          </StyledFlexChildRight>
        </StyledFlex>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  ${({ location }) => {
    let styles;
    switch (location.pathname) {
      case '/feed':
        styles = css`
          position: sticky;
          top: 0px;
          right: 0px;
          left: 0px;
          z-index: 400;
          background-color: rgb(254, 217, 40);
          transition: background-color 0.2s ease-in-out 0s;
        `;
        break;
      case '/':
        styles = css`
          position: relative;
          background-color: ${props => props.theme.palette.secondary.main};
          width: 100vw;
        `;
      default:
        
        break;
    }
    return styles;
  }}
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


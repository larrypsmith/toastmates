import React from 'react';
import styled from 'styled-components/macro';
import Container from './Container';
import Flex from './Flex';
import Typography from './Typography';
import UserIcon from './UserIcon';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';

const Navigation = ({ container: ParentContainer , children, ...props }) => {
  const isLoggedIn = useQueryIsLoggedIn();
  const components = isLoggedIn
    ? <UserIcon />
    : children;
  
  return (
    <ParentContainer {...props}>
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
            {components}
          </StyledFlexChildRight>
        </StyledFlex>
      </Container>
    </ParentContainer>
  );
};

export default Navigation;

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


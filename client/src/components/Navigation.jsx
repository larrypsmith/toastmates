import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  font: Helvetica;
  font-size: 16px;
  color: red;
  background-color: green;
  margin: 0;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <div>What's up doc</div>
    </StyledNavigation>
  )
};

export default Navigation;
import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';
import { isLoggedInVar } from '../../cache'

const DropdownMenuItem = ({ setDropdownHidden }) => {

  
  return (
    <StyledDropdownMenuItem>
      <SignOutButton setDropdownHidden={setDropdownHidden} />
    </StyledDropdownMenuItem>
  );
};

export default DropdownMenuItem;

const StyledDropdownMenuItem = styled.div`
  display: block;
  white-space: nowrap;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 100%;
  cursor: pointer;
  padding: 0px 18px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  margin: 0px;
  color: ${props => props.theme.palette.text.primary};
`;

const SignOutButton = ({ setDropdownHidden }) => {
  const handleClick = (e) => {
    isLoggedInVar(false);
    setDropdownHidden(true);
    localStorage.removeItem('auth-token');
  }
  
  return (
    <StyledButton onClick={handleClick}>
      <StyledTypography
        size='16px'
        weight={500}
      >
        Sign Out
      </StyledTypography>
    </StyledButton>
  )
};

const StyledTypography = styled(Typography)`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;
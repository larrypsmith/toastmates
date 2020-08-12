import React from 'react';
import styled from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';

const TopPaddingAndExitButton = () => (
  <StyledTopPaddingAndExitButton>
    <ExitModalButton />
  </StyledTopPaddingAndExitButton>
);

export default TopPaddingAndExitButton;

const StyledTopPaddingAndExitButton = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: rgb(0, 0, 0);
  z-index: 100000;
  
  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }
`;
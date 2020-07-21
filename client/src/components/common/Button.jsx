import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.common.white};
  font-size: 14px;
  letter-spacing: 0.75px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  height: 48px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;

  &:disabled {
    background-color: ${props => props.theme.palette.disabled};
    cursor: default;
  }
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    <span>{children}</span>
  </StyledButton>
);

export default Button;
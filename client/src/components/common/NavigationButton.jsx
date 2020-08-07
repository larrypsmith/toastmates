import React from 'react';
import styled from 'styled-components/macro';
import Typography from './Typography';

const NavigationButton = ({ children, ...props }) => (
  <StyledNavigationButton {...props}>
    <Typography size='12px' uppercase>
      {children}
    </Typography>
  </StyledNavigationButton>
);

const StyledNavigationButton = styled.button`
  height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-width: 86px;
  font-weight: 700;
  overflow: hidden;
  cursor: pointer;
`;

export default NavigationButton;
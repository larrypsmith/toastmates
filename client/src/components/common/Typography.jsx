import React from 'react';
import styled from 'styled-components/macro';

const StyledTypography = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: ${props => props.weight};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-size: ${props => props.size || '16px'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  display: ${props => props.inline ? 'inline' : 'block'};
`;

const Typography = ({ children, ...props }) => (
  <StyledTypography {...props}>
    <span>{children}</span>
  </StyledTypography>
);

export default Typography;
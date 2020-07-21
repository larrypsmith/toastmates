import React from 'react';
import styled, { css } from 'styled-components/macro';

const StyledTypography = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: ${props => props.weight};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-size: ${props => props.size || '16px'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  display: ${props => props.inline ? 'inline' : 'block'};
  
  ${({ color }) => (color &&
    css`
      color: ${props => {
        let color;
        if (props.color) {
          switch (props.color) {
            case 'black':
              color = props.theme.palette.common.black;
              break;
            case 'white':
              color = props.theme.palette.common.white;
              break;
            case 'secondary':
              color = props.theme.palette.text.secondary;
              break;
            default:
              color = 'inherit';
          }
        } else {
          color = 'inherit';
        }
        return color;
      }};
    `
  )}
`;

const Typography = ({ children, ...props }) => (
  <StyledTypography {...props}>
    <span>{children}</span>
  </StyledTypography>
);

export default Typography;
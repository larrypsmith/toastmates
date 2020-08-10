import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const FullfillmentType = ({ text, disabled, ...props
 }) => (
  <StyledLI disabled={disabled} {...props}>
    <StyledInput />
    <StyledTypography disabled={disabled} weight='600'>
      {text}
      <Typography hidden={!disabled} size='11px' weight='400'>
        Unavailable
      </Typography>
    </StyledTypography>
  </StyledLI>
);

export default FullfillmentType;

const StyledLI = styled.li`
  @media screen and (max-width: 1059px) {
    flex-grow: 1;
    
    &:first-child {
      border-left: 1px solid rgb(236, 237, 239);
    }

    &:last-child {
      border-right: 1px solid rgb(236, 237, 239);
    }
  }

  display: block;
  position: relative;
  border-right: 1px solid rgb(236, 237, 239);
`;

const StyledInput = styled.input`
  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 1059px) {
    width: 100%;
  }

  appearance: none;
  display: inline-block;
  height: 44px;
  opacity: 0;
  width: 140px;
  padding: 0px;
  box-sizing: border-box;
`;

const StyledTypography = styled(Typography)`
  align-items: center;
  text-align: center;
  bottom: 0px;
  color: ${props => props.disabled
    ? 'rgb(143, 149, 163)'
    : 'rgb(45, 49, 56)'
  };
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
  left: 0px;
  padding-top: 5px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-bottom: ${props => props.disabled 
    ? 'none'
    : '5px solid rgb(0, 204, 153)'
  };
`;
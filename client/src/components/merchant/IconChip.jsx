import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const IconChip = ({ icon: Icon, text }) => (
  <StyledIconChip>
    <Icon />
    <Typography
      size='11px'
      weight='500'
      uppercase
    >
      {text}
    </Typography>
  </StyledIconChip>
);

export default IconChip;

const StyledIconChip = styled.div`
  font-size: 11px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  background-color: rgb(255, 255, 255);
  text-transform: uppercase;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  padding: 0px 14px;
  transition: background-color 100ms ease-in-out 0s;

  & > :not(:last-child) {
    margin-right: 8px;
  }
`;
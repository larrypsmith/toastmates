import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const NameAndDescription = ({ itemName, description }) => (
  <StyledNameAndDescription>
    <NameTypography
      as='h2'
      size='24px'
      weight='600'
    > 
      {itemName}
    </NameTypography>
    <Typography
      as='p'
      size='16'
      color='secondary'
    >
      {description}
    </Typography>

  </StyledNameAndDescription>
);

export default NameAndDescription;

const StyledNameAndDescription = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 37px;
  margin-bottom: 30px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: 1060px) {
    padding-top: 0px;
    margin-top: 0px;
  }
`;

const NameTypography = styled(Typography)`
  margin-bottom: 8px;
`;
import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const HeroMobileHeader = () => (
  <StyledHeroMobileHeader>
    You want it. We get it.
  </StyledHeroMobileHeader>
);

export default HeroMobileHeader;

const StyledHeroMobileHeader = styled(Typography)`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 9px;
  text-align: center;
  color: black;
`;
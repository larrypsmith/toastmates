import React from 'react';
import styled from 'styled-components/macro';
import CheckmarkIcon from './CheckmarkIcon';

const MerchantName = ({ name }) => (
  <StyledMerchantName>
    <Text>
      {name}
      <CheckmarkIcon />
    </Text>
  </StyledMerchantName>
)

export default MerchantName;

const StyledMerchantName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: rgb(45, 49, 56);
  display: flex;
  margin-top: 0px;
  margin-bottom: 4px;
`;

const Text = styled.span`
  flex: 1 1 0%;
`;
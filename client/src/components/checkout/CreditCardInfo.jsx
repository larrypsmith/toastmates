import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

const CreditCardInfo = () => (
  <FlexParent>
    <FontAwesomeIcon icon={faCcVisa} size='2x' />
    <StyledSpan2>••••</StyledSpan2>
    <StyledSpan>1234</StyledSpan>
  </FlexParent>
);

export default CreditCardInfo;

const FlexParent = styled.span`
  display: flex;
  font-size: 14px;
  line-height: 1.43;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-left: 5px;
`;

const StyledSpan2 = styled(StyledSpan)`
  font-size: 23px;
`;
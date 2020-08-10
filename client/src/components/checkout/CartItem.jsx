import React from 'react';
import styled from 'styled-components/macro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = ({ item, quantity }) => (
  <li>
    <FlexParent>
      <StyledSpan>
        {quantity}
        &nbsp; <FontAwesomeIcon icon={faTimes} size='sm' /> &nbsp;
        {item.name}
      </StyledSpan>
      <StyledSpan>${item.price}</StyledSpan>
    </FlexParent>
  </li>
);

export default CartItem;

const FlexParent = styled.div`
  color: rgb(45, 49, 56);
  justify-content: space-between;
  line-height: 1.43;
  letter-spacing: -0.2px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
`;

const StyledSpan = styled.span`
  display: inline-block;
`;
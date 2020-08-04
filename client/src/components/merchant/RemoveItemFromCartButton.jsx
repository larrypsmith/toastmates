import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { cartItemsVar } from '../../cache';

const RemoveItemFromCartButton = ({ id, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();

    const cart = { ...cartItemsVar() };
    delete cart[id];
    cartItemsVar(cart);
    localStorage.setItem('CART_ITEMS', JSON.stringify(cartItemsVar()));
  };

  return (
    <StyledDiv onClick={handleClick} {...props}>
      <FontAwesomeIcon icon={faTimes} color='gray' />
    </StyledDiv>
  );
};

export default RemoveItemFromCartButton;

const StyledDiv = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
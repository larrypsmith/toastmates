import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { cartItemsVar } from '../../cache';
import Cart from '../../Cart';

const RemoveItemFromCartButton = ({ id, ...props }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    Cart.remove(id);
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
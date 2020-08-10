import React from 'react';
import styled from 'styled-components/macro';
import Cart from '../../Cart';
import { hideCartVar } from '../../cache';

const RemoveItemFromCartButton = ({ id }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    Cart.remove(id);
    if (Cart.isEmpty()) hideCartVar(true);
  };
  
  return (
    <StyledRemoveItemFromCartButton onClick={handleClick} />
  );
};

export default RemoveItemFromCartButton;

const StyledRemoveItemFromCartButton = styled.button`
  background-color: rgb(255, 255, 255);
  appearance: none;
  background-image: url(https://buyer-static-gcp.postmates.com/dist/prod/d4704dfde24543eac57f5f386f0e0b32.svg);
  display: inline-block;
  width: 10px;
  height: 10px;
  position: absolute;
  cursor: pointer;
  top: 6px;
  right: 0px;
  padding: 0px;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  background-position: center center;
  background-repeat: no-repeat;
`;
import React from 'react';
import styled from 'styled-components/macro';
import useCloseModal from '../../hooks/useCloseModal';
import Cart from '../../Cart';

const SoundsGoodButton = ({ item, quantity, merchantId }) => {
  const closeModal = useCloseModal();
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    Cart.empty();
    Cart.add(item, merchantId, quantity);
    closeModal();
  }
  
  return (
    <StyledSoundsGoodButton onClick={handleClick}>
      Sounds Good
    </StyledSoundsGoodButton>
  )
};

export default SoundsGoodButton;

const StyledSoundsGoodButton = styled.button`
  width: 100%;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 32px;
  padding: 0px 24px;
  transition: all 0.2s ease-out 0s;
`;
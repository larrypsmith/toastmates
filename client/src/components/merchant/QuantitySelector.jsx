import React from 'react';
import styled, { css } from 'styled-components/macro';
import Typography from '../common/Typography';

const QuantitySelector = ({ quantity, setQuantity, ...props }) => {
  const decrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity(quantity - 1);
  };

  const incrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };
  
  return (
    <StyledQuantitySelector {...props}>
      <StyledButton
        disabled={quantity <= 1}
        onClick={decrementQuantity}
      >
        -
      </StyledButton>
      <StyledTypography size='16px' weight='500'>
        {quantity}
      </StyledTypography>
      <StyledButton
        disabled={quantity >=  99}
        onClick={incrementQuantity}
      >
        +
      </StyledButton>
    </StyledQuantitySelector>
  )
};

export default QuantitySelector;

const StyledQuantitySelector = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 168px;
  max-width: 168px;
  height: 56px;
  color: rgb(45, 49, 56);
  border: 1px solid rgba(217, 219, 224, 0.5);
  border-radius: 100px;


`;

const StyledTypography = styled(Typography)`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: calc(100% - 15px);
  font-size: 16px;
  font-weight: 500;

  ${({ disabled }) => (disabled && 
    css`
      color: rgb(180, 184, 193);
      pointer-events: none;
    `
  )}
`;
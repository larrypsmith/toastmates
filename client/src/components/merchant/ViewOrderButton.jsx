import React from 'react';
import styled from 'styled-components/macro';
import { modalVar} from '../../cache';
// import useNumItemsInCart from '../../hooks/useNumItemsInCart';
import ViewOrderModal from './ViewOrderModal';
import useGetCartItems from '../../hooks/useGetCartItems';

const ViewOrderButton = () => {
  const { loading, error, data } = useGetCartItems();
  if (loading || error) return null;
  const numItemsInCart = data.cartItems.length;
  
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    modalVar(ViewOrderModal);
  }
  
  if (numItemsInCart === '0') return null;
  return (
    <Container onClick={handleClick}>
      <StyledButtonContainer>
        <StyledButton>
          <CartItemCount>
            {numItemsInCart}
          </CartItemCount>
          <ViewOrderText>
            View Order
          </ViewOrderText>
          <CartItemCount />
        </StyledButton>
      </StyledButtonContainer>
    </Container>
  );
};

export default ViewOrderButton;

const Container = styled.div`
  position: relative;
`;

const StyledButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 300;
  opacity: 1;
  visibility: visible;

  @media screen and (max-width: 1059px) {
    width: calc(100% - 32px);
    margin: 16px 16px 36px;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  height: 56px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;
  padding: 0px 20px;
`;

const CartItemCount = styled.span`
  font-size: 13px;
  letter-spacing: 0.8px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  text-align: left;
  flex: 1 1 0%;
`;

const ViewOrderText = styled.span`
  text-align: center;
  flex: 1 1 0%;
`;
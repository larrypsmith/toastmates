import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { gql } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useGetCartMerchant from '../../hooks/useGetCartMerchant';
import useGetMerchant from '../../hooks/useGetMerchant';
import CartItemsList from './CartItemsList';
import PriceInformation from './PriceInformation';

const CartShow = ({ isHidden, setIsHidden }) => {
  const { loading, error, data } = useGetCartMerchant();
  const {
    loading: merchantLoading,
    error: merchantError,
    data: merchantData
  } = useGetMerchant(data.cartMerchant);

  if (loading || error) return null;
  if (merchantLoading || merchantError) return null;

  const handleClick = (e) => {
    e.stopPropagation();
    setIsHidden(true);
  }
  
  return (
    <StyledSection isHidden={isHidden}>
      <Container>
        <CartContentsContainer>
          <PaddingBottomContainer>
            <CartDetailsSection>
              <RelativeHeader>
                <StyledCloseIcon
                  icon={faTimes}
                  size='lg'
                  onClick={handleClick}
                />
                <CartHeaderText>
                  Cart - {merchantData.merchant.name}
                </CartHeaderText>
              </RelativeHeader>
              <CartDetails>
                <CartItemsList />
                <PriceInformation />
              </CartDetails>
            </CartDetailsSection>
          </PaddingBottomContainer>
        </CartContentsContainer>
        {/* Checkout button goes here */}
      </Container>
    </StyledSection>
  );
};

export default CartShow;

const StyledSection = styled.section`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 1000;
  transform: ${props => props.isHidden
    ? 'translateY(100%)'
    : 'translateY(0%)'
  };
  transition: all 0.2s ease-out 0s;

  @media screen and (min-width: 768px) {
    transform: ${props => props.isHidden
      ? 'translateX(100%)'
      : 'translateX(0%)'
    };
  }

  @media screen and (min-width: 1060px) {
    width: 440px;
  }
`;

const Container = styled.div`
  background-color: rgb(246, 246, 248);
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`;

const CartContentsContainer = styled.div`
  overflow-y: scroll;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

const PaddingBottomContainer = styled.div`
  padding-bottom: 96px;
`;

const CartDetailsSection = styled.section`
  background-color: rgb(246, 246, 248);
  width: 100%;
  padding: 30px 20px;

  @media screen and (min-width: 768px) {
    padding: 30px 40px;
  }
`;

const RelativeHeader = styled.header`
  position: relative;
`;

const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 0px;
  top: 0px;
  cursor: pointer;
`;

const CartHeaderText = styled.div`
  @media screen and (min-width: 1060px) {
    max-width: 306px;
    margin: 0px auto;
  }

  color: rgb(143, 149, 163);
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  margin: 0px;
`;

const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 21px;
`;
import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useGetCartMerchant from '../../hooks/useGetCartMerchant';
import useGetMerchant from '../../hooks/useGetMerchant';
import CartItemsList from './CartItemsList';
import CheckoutButton from './CheckoutButton';
import PriceInformation from './PriceInformation';

const CartShow = ({ isHidden, setIsHidden }) => {
  const { loading, error, data } = useGetCartMerchant();
  const {
    loading: merchantLoading,
    error: merchantError,
    data: merchantData
  } = useGetMerchant(data.cartMerchant);
  
  
  const handleClick = (e) => {
    e.stopPropagation();
    setIsHidden(true);
  }
  
  if (loading || error) return null;
  // if (merchantLoading || merchantError) return null;
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
                  Cart - {merchantData && merchantData.merchant.name}
                </CartHeaderText>
              </RelativeHeader>
              <CartDetails>
                <CartItemsList setIsHidden={setIsHidden} />
                <PriceInformation />
              </CartDetails>
            </CartDetailsSection>
          </PaddingBottomContainer>
        </CartContentsContainer>
        <CheckoutButtonContainer>
          <RelativeDiv>
            <CheckoutButton merchantId={data.cartMerchant} />
          </RelativeDiv>
        </CheckoutButtonContainer>
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

const CheckoutButtonContainer = styled.div`
  background: linear-gradient(0deg,rgba(246,246,248,1) 74%,rgba(246,246,248,1) 91%,rgba(246,246,248,0) 100%);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 96px;
  padding: 20px;
`;

const RelativeDiv = styled.div`
  position: relative;
`;
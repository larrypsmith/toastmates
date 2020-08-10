import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import CartItems from './CartItems';
import CreditCardInfo from './CreditCardInfo';
import ContinueButton from './ContinueButton';
import DeliveryInfoSection from './DeliveryInfoSection';
import FulfillmentType from './FullfillmentType';
import PriceInformation from '../common/PriceInformation';
import useGetCart from '../../hooks/useGetCart';
import useGetMerchant from '../../hooks/useGetMerchant';
import Typography from '../common/Typography';

const CheckoutMainContent = () => {
  const { data: { cartMerchant, cartItems } } = useGetCart();
  const { data: merchantData } = useGetMerchant(cartMerchant);

  
  if (!merchantData) return null;
  const { merchant: { deliveryTime, name, id, deliveryFee } } = merchantData;
  return (
    <FlexParent>
      <StyledSection1>
        <MarginBottomDiv>
          <StyledUL>
            <FulfillmentType text='DELIVERY' deliveryFee={deliveryFee} />
            <FulfillmentType text='PICKUP' disabled />
          </StyledUL>
          <DeliveryInfoSection headerText='Delivery Address'>
            3601 Lyon St, San Francisco, CA 94123
          </DeliveryInfoSection>
          <DeliveryInfoSection headerText='Time'>
            As soon as possible
            ({deliveryTime.low}-
            {deliveryTime.high} mins)
          </DeliveryInfoSection>
          <DeliveryInfoSection headerText='Payment'>
            <CreditCardInfo />
          </DeliveryInfoSection>
        </MarginBottomDiv>
        <StyledMarginBottomDiv>
          <ContinueButton items={cartItems} />
        </StyledMarginBottomDiv>
      </StyledSection1>
      <StyledSection2>
        <CartInfoContainer>
          <Container>
            <MerchantNameAndLinkContainer>
              <MerchantNameSpan>
                {name}
              </MerchantNameSpan>
              <StyledLink to={`/merchant/${id}`}>
                View Menu
              </StyledLink>
            </MerchantNameAndLinkContainer>
            <CartItems />
            <PriceInformationContainer>
              <PriceInformation />
            </PriceInformationContainer>
          </Container>
        </CartInfoContainer>
        <StyledFlexContainer>
          <ContinueButton items={cartItems} merchantName={name}/>
        </StyledFlexContainer>
      </StyledSection2>
    </FlexParent>
  );
};

export default CheckoutMainContent;

const FlexParent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1060px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledSection1 = styled.section`
  width: 100%;

  @media screen and (min-width: 1060px) {
    max-width: 484px;
  }
`;

const MarginBottomDiv = styled.div`
  @media screen and (min-width: 1060px) {
    margin-bottom: 40px;
  }
`;

const StyledMarginBottomDiv = styled(MarginBottomDiv)`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1059px) {
    display: none;
  }
`;

const StyledSection2 = styled.section`
  width: 100%;
  position: relative;

  @media screen and (min-width: 1060px) {
    max-width: 392px;
  }
`;

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;

const StyledUL = styled.ul`
  @media screen and (max-width: 1059px) {
    width: calc(100% - 32px);
    justify-content: space-around;
    display: flex;
    border-left: 0px;
    border-right: 0px;
    margin: 0px auto 28px;
  }

  display: inline-flex;
  flex-direction: row;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(236, 237, 239);
  border-image: initial;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const CartInfoContainer = styled.div`
  @media screen and (min-width: 1060px) {
    box-shadow: rgba(0, 0, 0, 0.13) 0px 8px 15px 0px;
    margin-top: -60px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(241, 242, 243);
    border-image: initial;
  }

  border-top: 8px solid rgb(247, 247, 248);
`;

const Container = styled.div`
  @media screen and (min-width: 1060px) {
    padding-right: 32px;
    padding-left: 32px;
  }

  padding-top: 20px;
  padding-bottom: 20px;
`;

const MerchantNameAndLinkContainer = styled.div`
  @media screen and (min-width: 1060px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(236, 237, 239);
`;

const MerchantNameSpan = styled.span`
  @media screen and (min-width: 1060px) {
    font-size: 14px;
  }

  color: rgb(45, 49, 56);
  font-size: 18px;
  letter-spacing: -0.3px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: rgb(0, 204, 153);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.7px;
  font-weight: 600;
  text-decoration: none;
`;

const PriceInformationContainer = styled.div`
  @media screen and (min-width: 1060px) {
    padding-left: 0px;
    padding-right: 0px;
    border-top: none;
  }

  padding-left: 16px;
  padding-right: 16px;
  border-top: 8px solid rgb(247, 247, 248);
`;
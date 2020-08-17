import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems';
import useGetMerchant from '../../hooks/useGetMerchant';
import Cart from '../../Cart';

const PriceInformation = () => {
  const cartMerchantId = Cart.getMerchant();
  
  const { loading, error, data } = useGetCartItems();

  const {
    loading: merchantLoading,
    error: merchantError,
    data: merchantData
  } = useGetMerchant(cartMerchantId);

  if (loading || error || merchantLoading || merchantError) return null;

  const subtotal = Object
    .values(data.cartItems)
    .reduce((total, { item, quantity }) => (total + item.price * quantity), 0);

  const tax = subtotal * .13;

  const total = (subtotal + tax + merchantData.merchant.deliveryFee);

  return (
    <StyledPriceInformation>
      <div>
        <TotalContributor text='Subtotal' amount={subtotal.toFixed(2)} />
        <TotalContributor text='Tax' amount={tax.toFixed(2)} />
        <TotalContributor
          text='Delivery'
          amount={merchantData.merchant.deliveryFee.toFixed(2)}
        />
      </div>
      <StyledTotalContainer>
        <StyledDiv>Total</StyledDiv>
        <span>{total.toFixed(2)}</span>
      </StyledTotalContainer>
    </StyledPriceInformation>
  );
};

export default PriceInformation;

const StyledPriceInformation = styled.div`
  padding-top: 21px;
  padding-bottom: 24px;
`;

const TotalContributor = ({ text, amount }) => (
  <StyledFlexContainer>
    <StyledDiv>{text}</StyledDiv>
    <span>{amount}</span>
  </StyledFlexContainer>
);

const StyledFlexContainer = styled.div`
  &:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #8F95A3;
  font-size: 13px;
`;

const StyledDiv = styled.div`
  max-width: 60%;
  line-height: 18px;
`;

const StyledTotalContainer = styled(StyledFlexContainer)`
  font-weight: 600;
  color: ${props => props.theme.palette.text.primary};
`;
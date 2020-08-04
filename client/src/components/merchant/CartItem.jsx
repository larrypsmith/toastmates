import React from 'react';
import styled from 'styled-components/macro';
import RemoveItemFromCartButton from './RemoveItemFromCartButton';
import Typography from '../common/Typography';

const CartItem = ({ item, quantity, ...props }) => {
  return (
    <StyledCartItem {...props}>
      <FlexContainer>
        <Typography>{quantity}</Typography>
        <Container>
          <NameTypography size='16px' weight='500'>
            {item.name}
          </NameTypography>
        </Container>
        <Typography size='14px' color='primary'>${item.price}</Typography>
      </FlexContainer>
      <RemoveItemFromCartButton id={item.id} />
    </StyledCartItem>
  );
};

export default CartItem;

const StyledCartItem = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 28px;
  min-height: 60px;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;

const FlexContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex: 1 1 0%;
`;

const Container = styled.div`
  flex: 1 1 0%;
  padding: 0px 20px;
`;

const NameTypography = styled(Typography)`
  margin-bottom: 4px;
`;
import React from 'react';
import styled from 'styled-components/macro';
import { gql, useQuery } from '@apollo/client';
import RemoveItemFromCartButton from './RemoveItemFromCartButton';
import Typography from '../common/Typography';

const GET_ITEM = gql`
  query GetItem($id: ID!) {
    item(id: $id) {
      id
      name
      price
    }
  }
`;

const CartItem = ({ id, qty, ...props }) => {
  const { error, data } = useQuery(GET_ITEM, {
    variables: { id }
  });

  if (error) throw new Error(error.message);
  if (!data) return null;

  return (
    <StyledCartItem {...props}>
      <FlexContainer>
        <Typography>{qty}</Typography>
        <Container>
          <NameTypography size='16px' weight='500'>
            {data.item.name}
          </NameTypography>
        </Container>
        <Typography size='14px' color='primary'>${data.item.price}</Typography>
      </FlexContainer>
      <RemoveItemFromCartButton id={id} />
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
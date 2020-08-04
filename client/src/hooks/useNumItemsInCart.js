import { gql, useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';
import useGetCartItems from './useGetCartItems';

const GET_CART_MERCHANT = gql`
  query GetCartMerchant {
    cartMerchant @client
  }
`;

const useNumItemsInCart = () => {
  const match = useRouteMatch();
  const { loading: itemsLoading, error: itemsError, data: itemsData } = useGetCartItems();
  const { loading: merchantLoading, error: merchantError, data: merchantData } = useQuery(GET_CART_MERCHANT);
  
  if (itemsLoading) return null;
  if (itemsError) {
    throw new Error(itemsError.message);
  }

  if (merchantLoading) return null;
  if (merchantError) {
    throw new Error(merchantError.message);
  }

  const isNotSameMerchant = merchantData.cartMerchant !== (match.params && match.params.id);
  
  const numItemsInCart = isNotSameMerchant
    ? '0'
    : Object.values(itemsData.cartItems)
      .reduce((total, { quantity }) => total + quantity, 0);

  return numItemsInCart;
};

export default useNumItemsInCart;
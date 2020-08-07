import { gql, useQuery } from '@apollo/client';

const GET_CART = gql`
  query GetCart {
    cartItems @client
    cartMerchant @client
  }
`;

const useGetCart = () => useQuery(GET_CART);

export default useGetCart;
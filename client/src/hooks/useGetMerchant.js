import { gql, useQuery } from '@apollo/client';

const GET_MERCHANT = gql`
  query GetMerchant($id: ID!) {
    merchant(id: $id) {
      id
      name
    }
  }
`;

const useGetMerchant = (id) => {
  return useQuery(GET_MERCHANT, {
    variables: { id }
  })
};

export default useGetMerchant;
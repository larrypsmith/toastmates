import { gql, useQuery } from '@apollo/client';

const GET_ITEM = gql`
  query GetItem($id: ID!) {
    item(id: $id) {
      id
      name
      price
    }
  }
`;

const useGetItem = (id) => {
  return useQuery(GET_ITEM, {
    variables: { id },
    errorPolicy: 'all'
  })
};

export default useGetItem;
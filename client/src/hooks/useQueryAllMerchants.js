import { useQuery, gql } from '@apollo/client';

const GET_ALL_MERCHANTS = gql`
  {
    allMerchants {
      id,
      name,
      cuisine,
      address,
      deliveryFee
      deliveryTime {
        low,
        high
      },
      menus
    }
  }
`;

const useQueryAllMerchants = () => {
  const { error, data } = useQuery(GET_ALL_MERCHANTS);
  return data;
};

export default useQueryAllMerchants;
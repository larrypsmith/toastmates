import { useRouteMatch } from 'react-router-dom';
import useGetCartItems from './useGetCartItems';
import useGetCartMerchant from './useGetCartMerchant';

const useNumItemsInCart = () => {
  const match = useRouteMatch();
  const { loading: itemsLoading, error: itemsError, data: itemsData } = useGetCartItems();
  const { loading: merchantLoading, error: merchantError, data: merchantData } = useGetCartMerchant();
  
  if (itemsLoading) return '0';
  if (itemsError) {
    throw new Error(itemsError.message);
  }

  if (merchantLoading) return '0';
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
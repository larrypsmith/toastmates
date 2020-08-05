import { InMemoryCache } from '@apollo/client';
import { makeVar } from "@apollo/client";
import Cart from './Cart';

export const isLoggedInVar = makeVar(false);
export const modalVar = makeVar(null);

export const cartItemsVar = makeVar([]);
debugger                                                                                      ;
export const cartMerchantVar = makeVar('');

export const redirectVar = makeVar('');

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        },
        modal: {
          read() {
            return modalVar();
          }
        },
        cartItems: { 
          read() {
            debugger
            return Cart.getItems();
          }
        },
        cartMerchant: {
          read() {
            return Cart.getMerchant();
          }
        }
      }
    }
  }
});

export default cache;
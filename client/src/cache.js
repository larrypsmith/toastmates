import { InMemoryCache } from '@apollo/client';
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const modalVar = makeVar(null);

const cartItems = JSON.parse(localStorage.getItem('CART_ITEMS'));
export const cartItemsVar = makeVar(cartItems || {});
export const cartMerchantVar = makeVar(localStorage.getItem('CART_MERCHANT') || '');

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
            return cartItemsVar();
          }
        },
        cartMerchant: {
          read() {
            return cartMerchantVar();
          }
        }
      }
    }
  }
});

export default cache;
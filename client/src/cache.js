import { InMemoryCache } from '@apollo/client';
import { makeVar } from "@apollo/client";
import Cart from './Cart';

export const isLoggedInVar = makeVar(false);
export const modalVar = makeVar(null);

export const cartItemsVar = makeVar([]);
export const cartMerchantVar = makeVar('');

export const redirectVar = makeVar('');
export const hideCartVar = makeVar(true);

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
            return Cart.getItems();
          }
        },
        cartMerchant: {
          read() {
            return Cart.getMerchant();
          }
        },
        hideCart: {
          read() {
            return hideCartVar();
          }
        }
      }
    },
    ItemType: {
      fields: {
        isInCart: {
          read(_, options) {
            return Cart.getItems().includes(options.variables.id);
          }
        }
      }
    }
  }
});

export default cache;
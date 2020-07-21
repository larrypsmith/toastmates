import { InMemoryCache } from '@apollo/client';
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);
export const modalVar = makeVar(null);

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
        }
      }
    }
  }
});

export default cache;
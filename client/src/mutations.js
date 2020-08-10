import { gql } from '@apollo/client';

export const VERIFY_USER = gql`
  mutation VerifyUser($token: String!) {
    verifyUser(token: $token) {
      loggedIn
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($items: [Item]!) {
    createOrder(items: $items) {
      id
      user
      data
    }
  }
`;
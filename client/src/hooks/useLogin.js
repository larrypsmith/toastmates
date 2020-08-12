import { useMutation, gql } from '@apollo/client';
import useCloseModal from './useCloseModal';
import { isLoggedInVar } from '../cache';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name {
        first
        last
      }
      email
      loggedIn
      token
    }
  }
`;

const useLogin = () => {
  const closeModal = useCloseModal();

  const [loginUser] = useMutation(
    LOGIN_USER,
    {
      onCompleted: (data) => {
        const { token } = data.login;
        localStorage.setItem('auth-token', token);
        isLoggedInVar(data.login.loggedIn);
        closeModal();
        window.location.reload();
      }
    }
  );
  
  return (email, password) => {
    loginUser({
      variables: {
        email,
        password
      }
    })
  };
};

export default useLogin;
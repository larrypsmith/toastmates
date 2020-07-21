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

  const [loginUser, { data }] = useMutation(
    LOGIN_USER,
    {
      onCompleted: (data) => {
        const { token } = data.login;
        localStorage.setItem('auth-token', token);
        console.log('auth token:', localStorage.getItem('auth-token'));
        isLoggedInVar(data.login.loggedIn);
        closeModal();
      },
      // onError: (err) => {debugger; errorVar(err.message)}
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
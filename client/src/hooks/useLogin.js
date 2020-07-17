import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useCloseModal from './useCloseModal';

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
  const updateCache = (client, { data }) => {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    })
  };

  const closeModal = useCloseModal();

  const [loginUser, { data }] = useMutation(
    LOGIN_USER,
    {
      onCompleted: (data) => {
        const { token } = data.login;
        localStorage.setItem('auth-token', token);
        console.log('auth token:', localStorage.getItem('auth-token'));
        closeModal();
      },
      update: (client, data) => updateCache(client, data),
      onError: (err) => (console.log(err))
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
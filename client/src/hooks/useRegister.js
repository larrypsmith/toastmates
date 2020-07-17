import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


const REGISTER_USER = gql`
  mutation RegisterUser($fname: String!, $lname: String!, $email: String!, $password: String!) {
    register(fname: $fname, lname: $lname, email: $email, password: $password) {
      email
      token
      loggedIn
    }
  }
`;

const useRegister = () => {
  const updateCache = (client, { data }) => {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  const [registerUser, { data }] = useMutation(
    REGISTER_USER,
    {
      onCompleted: (data) => {
        const { token } = data.register;
        localStorage.setItem('auth-token', token);
        console.log('localStorage: ', localStorage.getItem('auth-token'));
      },
      update: (client, data) => updateCache(client, data)
    }
  );

  return (email, password, fname, lname) => {
    registerUser({
      variables: {
        fname,
        lname,
        email,
        password
      }
    })
  }
};

export default useRegister;
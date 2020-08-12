import { useMutation, gql } from '@apollo/client';
import { isLoggedInVar, errorVar } from '../cache';


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
  const [registerUser, { data }] = useMutation(
    REGISTER_USER,
    {
      onCompleted: (data) => {
        const { token } = data.register;
        localStorage.setItem('auth-token', token);
        isLoggedInVar(data.register.loggedIn);
        window.location.reload();
      },
      onError: err => errorVar(err.message)
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
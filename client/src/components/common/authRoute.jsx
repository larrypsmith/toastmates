import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../reactiveVariables';

// const IS_LOGGED_IN = gql`
//   {
//     isLoggedIn @client
//   }
// `;

function AuthRoute({
  component,
  path,
  exact,
  routeType,
  ...rest
}) {
  // const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (routeType === 'auth') {
    return (
      <Route
        path={path}
        exact={exact}
        render={props => (
          !isLoggedInVar() ? <Component {...props} /> : <Redirect to="/" />
        )}
      />
    );
  } else {
    return (
      <Route 
        {...rest}
        render = {props => (
          isLoggedInVar() ? <Component {...props} /> : <Redirect to="/login" />
        )}
      />
    )
  }
};

export default AuthRoute;
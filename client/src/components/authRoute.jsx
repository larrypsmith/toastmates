import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Route, Redirect } from 'react-router-dom';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

function AuthRoute({
  component,
  path,
  exact,
  routeType,
  ...rest
}) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (routeType === 'auth') {
    return (
      <Route
        path={path}
        exact={exact}
        render={props => (
          !data.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
      />
    );
  } else {
    return (
      <Route 
        {...rest}
        render = {props => (
          data.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
      />
    )
  }
};

export default AuthRoute;
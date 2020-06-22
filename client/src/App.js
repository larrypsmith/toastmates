import React from 'react';
import Users from './components/users';
import Register from './components/register';
import Logout from './components/logout';
import Login from './components/login';

function App() {
  return (
    <React.Fragment>
      <Users />
      <Register />
      <Logout />
      <Login />
    </React.Fragment>
  );
}

export default App;

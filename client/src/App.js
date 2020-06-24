import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SplashPage from './components/SplashPage';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <SplashPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
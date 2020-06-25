import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <SplashPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
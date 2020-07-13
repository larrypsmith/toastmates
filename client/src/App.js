import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SplashPage from './components/splash/SplashPage';
import GlobalStyle from './components/common/GlobalStyle';

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
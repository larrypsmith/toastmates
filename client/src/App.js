import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthModalContent from './components/common/AuthModalContent';
import FeedPage from './components/feed/FeedPage';
import GlobalStyle from './components/common/GlobalStyle';
import ModalContainer from './components/common/ModalContainer';
import ModalContent from './components/common/ModalContent';
import ModalRoot from './components/common/ModalRoot';
import SplashPage from './components/splash/SplashPage';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ModalRoot>
      </ModalRoot>
      <Switch>
        <Route path='/feed'><FeedPage /></Route>
        <Route path='/'><SplashPage /></Route>
        <Redirect to='/' />
      </Switch>
    </React.Fragment>
  );
}

export default App;
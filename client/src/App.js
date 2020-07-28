import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import FeedPage from './components/feed/FeedPage';
import Footer from './components/splash/Footer';
import GlobalStyle from './components/common/GlobalStyle';
import ModalRoot from './components/common/ModalRoot';
import Navigation from './components/common/Navigation';
import SplashPage from './components/splash/SplashPage';

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <Navigation />
    <MainContainer>
      <Switch>
        <Route path='/feed'><FeedPage /></Route>
        <Route exact path='/'><SplashPage /></Route>
        <Redirect to='/feed' />
      </Switch>
    </MainContainer>
    <Footer />
    <ModalRoot />
  </StyledApp>
);

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const MainContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;
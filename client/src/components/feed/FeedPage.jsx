import React from 'react';
import FeedPageHeader from './FeedPageHeader.jsx';
import FeedPageMain from './FeedPageMain.jsx';
import FeedNavigation from './FeedNavigation';

const FeedPage = () => (
  <React.Fragment>
    <FeedNavigation />
    <FeedPageHeader />
    <FeedPageMain />
  </React.Fragment>
);

export default FeedPage;
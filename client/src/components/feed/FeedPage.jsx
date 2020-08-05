import React from 'react';
import FeedPageHeader from './FeedPageHeader.jsx';
import FeedPageMain from './FeedPageMain.jsx';
import FeedNavigation from './FeedNavigation';
import ViewOrderButton from '../merchant/ViewOrderButton';

const FeedPage = () => (
  <React.Fragment>
    <FeedNavigation />
    <FeedPageHeader />
    <FeedPageMain />
    <ViewOrderButton />
  </React.Fragment>
);

export default FeedPage;
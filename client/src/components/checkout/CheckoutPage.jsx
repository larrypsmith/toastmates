import React from 'react';
import CheckoutNavigation from './CheckoutNavigation';
import CheckoutMain from './CheckoutMain';

const CheckoutPage = () => {
  return (
    <React.Fragment>
      <CheckoutNavigation />
      <CheckoutMain />
    </React.Fragment>
  );
};

export default CheckoutPage;
import React from 'react';
import Typography from '../common/Typography';

const MerchantDeliveryDetails = ({ deliveryFee, deliveryTime }) => {
  return(
  <div>
    <Typography
    as='span'
    size='14px'
    color='secondary'
    >
      <Typography
        weight={500}
        color='primary'
        as='span'
      >
        ${deliveryFee} Delivery
      </Typography>
       &nbsp;&#183;&nbsp;

      {deliveryTime.low}-{deliveryTime.high} min 
    </Typography>
  </div>
);
  }

export default MerchantDeliveryDetails;
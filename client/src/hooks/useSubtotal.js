import { useState } from 'react';

const useSubtotal = () => {
  const [subtotal, setSubtotal] = useState(0);

  const addToSubtotal = (price) => {
    setSubtotal(subtotal + price);
  };

  return [
    Math.round(subtotal * 100) / 100,
    addToSubtotal
  ];
};

export default useSubtotal;
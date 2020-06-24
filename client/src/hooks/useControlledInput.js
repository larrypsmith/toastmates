import { useState } from 'react';

function useControlledInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function updateControlledInput(e) {
    e.preventDefault();
    e.stopPropagation();
    setValue(e.currentTarget.value);
  };

  return [value, updateControlledInput];
};

export default useControlledInput;
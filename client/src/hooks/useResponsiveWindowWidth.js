import { useState, useEffect } from 'react';

const useResponsiveWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cb = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
  }, []);

  return windowWidth;
};

export default useResponsiveWindowWidth;
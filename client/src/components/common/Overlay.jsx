import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const Overlay = ({ hidden, ...props }) => {
  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'initial'
    };
  });
  
  return <StyledOverlay hidden={hidden} {...props} />;
};

export default Overlay;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;
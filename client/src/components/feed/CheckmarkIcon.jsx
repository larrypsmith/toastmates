import React from 'react';
import styled from 'styled-components/macro';

const CheckmarkIcon = () => (
  <CheckmarkIconContainer>
    <SVG
      width='14'
      height='14'
      viewBox='0 0 14 14'
    >
      <g
        fill='none'
        fillRule='evenodd'
      >
        <rect
          fill='#0C9'
          width='14'
          height='14'
          rx='7'
        ></rect>
        <path
          fill='#FFF'
          d='M3 7l3 3 4.5-4.5-1-1L6 8 4 6'
        ></path>
      </g>
    </SVG>
  </CheckmarkIconContainer>
);

export default CheckmarkIcon;

const CheckmarkIconContainer = styled.span`
  justify-content: center;
  align-items: center;
  display: inline-flex;
  align-self: center;
  height: 14px;
  width: 14px;
  margin-left: 8px;
  vertical-align: -2px;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
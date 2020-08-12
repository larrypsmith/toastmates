import React from 'react';
import styled from 'styled-components/macro';
import { modalVar } from '../../cache';
import ReviewOrderModal from './ReviewOrderModal';

const ContinueButton = ({ items, merchantName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    debugger
    const component = () => (
      <ReviewOrderModal items={items} merchantName={merchantName} />
    )

    modalVar(component);
  }
  
  return (
    <StyledContinueButton onClick={handleClick}>Continue</StyledContinueButton>
  )
};

export default ContinueButton;

const StyledContinueButton = styled.button`
  @media screen and (min-width: 1060px){
    width: 110px;
  }

  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  width: 100%;
  height: 48px;
  min-width: 280px;
  display: inline-block;
  text-align: center;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 14px 20px;
  transition: background-color 0.25s ease-in-out 0s;
  border-radius: 28px;
`;
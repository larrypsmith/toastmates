import React, { useState } from 'react';
import styled from 'styled-components/macro';
import DropdownMenuItem from './DropdownMenuItem';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn.js'

const UserIcon = () => {
  const isLoggedIn = useQueryIsLoggedIn();
  const [isDropdownHidden, setDropdownHidden] = useState(true);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownHidden(!isDropdownHidden);
  };
  
  if (!isLoggedIn) return null;
  return (
    <StyledIconContainer>
      <div>
        <IconFlexParent>
          <IconContainer onClick={toggleDropdown}>
            <StyledSvg width='32' height='32'>
              <g fill='none' fillRule='evenodd'>
                <circle
                  fill='#ECEDEF'
                  cx='16'
                  cy='16'
                  r='16'
                ></circle>
                <path
                  d="M12.886 10.824A3.222 3.222 0 0116.1 7.6a3.22 3.22 0 013.214 3.224v1.052A3.222 3.222 0 0116.1 15.1a3.22 3.22 0 01-3.214-3.224v-1.052zm3.214 6.419c5.357 0 7.5 2.143 7.5 2.143V22.6h-15v-3.214s2.143-2.143 7.5-2.143z"
                  fill='#C6CAD1'
                ></path>
              </g>
            </StyledSvg>
          </IconContainer>
        </IconFlexParent>
      </div>
      <DropdownMenuContainer isHidden={isDropdownHidden}>
        <DropdownMenuContent>
          <DropdownMenuItem setDropdownHidden={setDropdownHidden} />
        </DropdownMenuContent>
      </DropdownMenuContainer>
    </StyledIconContainer>
  );
};

export default UserIcon;

const StyledIconContainer = styled.div`
  position: relative;
`;

const IconFlexParent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: none;
`;

const IconContainer = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.palette.common.black};
`;

const StyledSvg = styled.svg`
  overflow: hidden;
  display: inline-block;
  line-height: 0;
  color: #000;
`;

const StyledDropdownMenuContainer = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(16, 25, 30, 0.08) 0px 1px 4px 0px;
  position: absolute;
  z-index: 1100;
  opacity: 1;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 243, 243);
  border-image: initial;
  transition: opacity 100ms ease-in-out 0s;

  @media screen and (max-width: 767px) {
    bottom: -13px;
    left: calc(-50% + 24px + -9px);
    transform: translate(calc(-100% + 81px), 100%);
    width: 100vw;
    height: calc(100vh - 0px);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;

    &::before, ::after {
      right: 49px;
    }

    &::before {
      margin-right: -9px;
      border-bottom-color: rgb(242, 243, 243) !important;
      border-width: 9px !important;
      position: absolute;
      width: 0px;
      height: 0px;
      content: "";
      bottom: 100%;
      border-width: initial;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
    }

    &::after {
      margin-right: -8px;
      border-bottom-color: rgb(255, 255, 255) !important;
      border-width: 8px !important;
    }
  }

  @media screen and (min-width: 768px) {
    bottom: -13px;
    left: calc(-50% + 24px + -60px);
    transform: translate(calc(-50% + 24px + 0px), 100%);

    &::before {
      margin-left: -9px;
      border-bottom-color: rgb(242, 243, 243) !important;
      border-width: 9px !important;
    }

    &::after {
      margin-left: -8px;
      border-bottom-color: rgb(255, 255, 255) !important;
      border-width: 8px !important;
    }

    &::before, ::after{
      position: absolute;
      width: 0px;
      height: 0px;
      content: "";
      bottom: 100%;
      left: calc(50% - -60px);
      border-width: initial;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
    }
  }
`;

const DropdownMenuContainer = ({ children, isHidden }) => {
  if (isHidden) return null;  
  return (
    <StyledDropdownMenuContainer>
      {children}
    </StyledDropdownMenuContainer>
  )
}

const DropdownMenuContent = styled.div`
  min-width: 215px;
  background-color: ${props => props.theme.palette.common.white};
`;
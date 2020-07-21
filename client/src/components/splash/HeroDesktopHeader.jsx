import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const HeroDesktopHeader = () => {
  const items = [
    'burgers',
    'sushi',
    'wings',
    'ice cream',
    'smoothies',
    'beer',
    'a new charger',
    'noodles'
  ];

  return (
    <StyledHeroDesktopHeader>
      <div>
        <span>Want</span>
      </div>
      &nbsp;
      <WordCarouselParent>
        {items.map((item, idx) => (
          <WordCarouselChild key={idx} i={idx}>
            {item}?
          </WordCarouselChild>
        ))}
      </WordCarouselParent>
    </StyledHeroDesktopHeader>
  )
};

export default HeroDesktopHeader;

const StyledHeroDesktopHeader = styled.h2`
  display: flex;
  line-height: 84px;
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 9px;
  text-align: center;
  color: ${props => props.theme.palette.common.black};
  overflow: hidden;
  margin-bottom: 0;
  position: relative;
  height: 82px;
  width: 100%;
`;

const WordCarouselParent = styled.div`
  display: inline-block;
  flex-grow: 1;
  position: relative;
`;

const StyledWordCarouselChild = styled.div`
  animation-delay: ${props => Number(props.i) * 3.7}s;
  animation-duration: 29.6s;
  animation-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  animation-iteration-count: infinite;
  animation-name: word-carousel;
  position: absolute;
  top: 83px;
  opacity: 0;
  color: black;

  @keyframes word-carousel {
    0% {
      opacity: 0;
      top: 83px;
    }
    1% {
      opacity: 1;
      top: 0;
    }
    12.5% {
      opacity: 1;
      top: 0;
    }
    13.5% {
      opacity: 0;
      top: -83px;
    }
    100% {
      opacity: 0;
      top: 83px;
    }
  }
`;

const WordCarouselChild = ({ children, ...props }) => (
  <StyledWordCarouselChild {...props}>
    <span>{children}</span>
  </StyledWordCarouselChild>
);
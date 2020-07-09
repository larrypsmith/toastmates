import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const StyledWordCarousel = styled.ul`
  height: 1.2em;
  overflow: hidden;
`;

const moveWordUp = keyframes`
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(0px);
  }

  25% {
    transform: translateY(-18.4px);
  }

  45% {
    transform: translateY(-18.4px);
  }
  
  50% {
    transform: translateY(${-18.4 * 2}px);
  }

  70% {
    transform: translateY(${-18.4 * 2}px);
  }

  75% {
    transform: translateY(${-18.4 * 3}px);
  }

  100% {
    transform: translateY(${-18.4 * 4}px);
  }
`;

const StyledWord = styled.li`
  animation-name: ${moveWordUp};
  animation-duration: 10s;
  animation-delay: 1s;
  animation-iteration-count: ${props => props.wordCount - 1};
  list-style: none;
`;

function WordCarousel() {
  const words = ['pizza', 'ice cream', 'burgers', 'sushi'];

  return (
    <StyledWordCarousel>
      {words.map((word, idx) => (
        <StyledWord
          wordCount={words.length}
          key={idx}>{word}
        </StyledWord>
      ))}
    </StyledWordCarousel>
  )
};

export default WordCarousel;
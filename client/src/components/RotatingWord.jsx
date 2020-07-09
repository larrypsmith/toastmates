import React, { useEffect } from 'react';
import useRotatingWords from '../hooks/useRotatingWords';
import styled, { keyframes } from 'styled-components/macro';

const duration = 3 * 1000;

const pushOut = keyframes`
    70% {
        transform: none;
    }
    100% {
        transform: translateY(-1em);
    }
`;

const pushIn = keyframes`
    70% {
        transform: translateY(1em);
    }
    100% {
        transform: none;
    }
`;

const StyledOutgoingWord = styled.span`
    animation-name: ${pushOut};
    animation-duration: ${duration}ms;
    animation-iteration-count: infinite;
    position: absolute;
`;

const StyledIncomingWord = styled.span`
    animation-name: ${pushIn};
    animation-duration: ${duration}ms;
    animation-iteration-count: infinite;
    position: absolute;
    transform: translateY(1em);
`;

const StyledContainer = styled.div`
    position: relative;
`;

/* TODO
Correct component steps:
1. component renders with first word in place
2. after 3 seconds, animation triggers to push current word up, animation triggers to push new word in
3. outgoing word removed from front of array and added to back
- use overflow: hidden to hide words?

- render array of words vertically
- display: hidden on all words except current
- use position: absolute and z-index to mask other words?
- render entire array of words, 1 animation to run through all words
- reset animation once end of array is reached
*/

function RotatingWord() {
    const words = ['pizza', 'burgers', 'beer'];
    const [currentWord, nextWord, rotateWord] = useRotatingWords(words);

    useEffect(() => {
        setTimeout(rotateWord, duration);
    })

    return (
        <StyledContainer>
            <StyledOutgoingWord>{currentWord}?</StyledOutgoingWord>
            <StyledIncomingWord>{nextWord}?</StyledIncomingWord>
        </StyledContainer>
    )
};

export default RotatingWord;
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const duration = 3 * 1000;

const pushOut = keyframes`
    95% {
        transform: none;
    }
    100% {
        transform: translateY(-1em);
    }
`;

const pushIn = keyframes`
    95% {
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

function RotatingWord() {
    const words = ['pizza', 'burgers', 'beer'];
    const [currentWordIdx, setCurrentWordIdx] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (currentWordIdx === words.length - 1) {
                setCurrentWordIdx(0);
            } else {
                setCurrentWordIdx(currentWordIdx + 1);
            }
        }, duration);
    })

    return (
        <StyledContainer>
            <StyledOutgoingWord>{words[currentWordIdx]}?</StyledOutgoingWord>
            <StyledIncomingWord>{words[currentWordIdx + 1] || words[0]}?</StyledIncomingWord>
        </StyledContainer>
    )
};

export default RotatingWord;
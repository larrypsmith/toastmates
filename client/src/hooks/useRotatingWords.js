import { useState } from 'react'

function useRotatingWords(words) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const currentWord = words[currentWordIdx];

  const nextWordIdx = (currentWordIdx === words.length - 1)
    ? 0
    : currentWordIdx + 1;

  const nextWord = words[nextWordIdx];

  function rotateWord() {
    setCurrentWordIdx(nextWordIdx);
  };

  return [currentWord, nextWord, rotateWord];
};

export default useRotatingWords;
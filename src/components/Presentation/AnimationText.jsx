import React, { useEffect, useState } from 'react';
import { useAnimationContext } from './AnimationContext';

const AnimationText = ({ text }) => {
  const [textDisplay, setTextDisplay] = useState("");
  const [animationDone, setAnimationDone] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const { setIsAnimationDone } = useAnimationContext();

  useEffect(() => {
    setCurrentText(text);
    setTextDisplay("");
    setAnimationDone(false);
    setIsAnimationDone(false);

    const timeoutId = setTimeout(() => {
      const interval = 100;
      const typer = setInterval(() => {
        setTextDisplay(prev => {
          const nextIndex = prev.length + 1;

          if (nextIndex <= currentText.length) {
            const newSpecialty = currentText.slice(0, nextIndex);
            return newSpecialty;
          } else {
            clearInterval(typer);
            setAnimationDone(true);
            setIsAnimationDone(true);
            return prev;
          }
        });
      }, interval);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
      setTextDisplay("");
      setAnimationDone(true);
      setIsAnimationDone(true);
    };
  }, [text, currentText, setIsAnimationDone]);

  return (
    <>
      {textDisplay.split("").map((letter, index) => (
        <span key={index}>
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <span className={`cursor ${animationDone ? 'done' : ''}`}>|</span>
    </>
  );
};

export default AnimationText;

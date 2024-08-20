import React, { createContext, useState, useContext } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isAnimationDone, setIsAnimationDone] = useState(true);

  return (
    <AnimationContext.Provider value={{ isAnimationDone, setIsAnimationDone }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);

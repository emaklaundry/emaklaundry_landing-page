import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  animationsEnabled: boolean;
  enableAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  const enableAnimations = () => {
    setAnimationsEnabled(true);
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, enableAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationContext must be used within AnimationProvider"
    );
  }
  return context;
};

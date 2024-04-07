import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Interface for Constants
 */
interface ConstantsType {
    BLACK_BACKGROUND: string;
}

/**
 * Constants object
 */
const Constants: ConstantsType = {
    BLACK_BACKGROUND: 'rgba(0,0,0,0.9)'
};

/**
 * StylesContext using ConstantsType
 */
const StylesContext = createContext<ConstantsType>(Constants);

/**
 * Custom hook to use the StylesContext
 * @returns {ConstantsType} Constants object
 */
export const useConstants = (): ConstantsType => {
  return useContext(StylesContext);
};

/**
 * Interface for StylesProviderProps
 */
interface StylesProviderProps {
  children: ReactNode;
}

/**
 * StylesProvider component
 * @param {ReactNode} children - React children nodes
 * @returns {JSX.Element} StylesContext provider with children
 */
export const StylesProvider: React.FC<StylesProviderProps> = ({ children }) => {
  const [constants, setConstants] = useState<ConstantsType>(Constants);

  return (
    <StylesContext.Provider value={constants}>
      {children}
    </StylesContext.Provider>
  );
};

import { createContext, useState } from 'react';

type ContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type PropsType = {
  children: React.ReactNode;
};

// create context
const DarkThemeContext = createContext<ContextType | null>(null);

// create provider
const DarkThemeProvider: React.FC<PropsType> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
      <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
        {children}
      </DarkThemeContext.Provider>
    </>
  );
};

export { DarkThemeContext, DarkThemeProvider };

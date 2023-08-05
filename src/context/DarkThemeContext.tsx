import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

// create context
const DarkThemeContext = createContext();

// create provider
const DarkThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
        {children}
      </DarkThemeContext.Provider>
    </>
  );
};

export { DarkThemeContext, DarkThemeProvider };

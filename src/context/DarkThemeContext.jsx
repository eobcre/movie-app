import { createContext, useState } from 'react';

// create context
const DarkThemeContext = createContext();

// create provider
const DarkThemeProvider = ({ children }) => {
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

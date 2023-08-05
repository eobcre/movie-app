import { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkThemeContext';

const Switch: React.FC = () => {
  const { isDark, setIsDark } = useContext(DarkThemeContext);

  const handleSwitch = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div onClick={handleSwitch}></div>
    </div>
  );
};

export default Switch;

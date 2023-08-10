import { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkThemeContext';

import { TiWeatherSunny, TiWeatherNight } from 'react-icons/ti';

const Switch: React.FC = () => {
  const ThemeContext = useContext(DarkThemeContext);

  // null check
  if (!ThemeContext) {
    throw new Error('DarkThemeContext is null.');
  }

  const { isDark, setIsDark } = ThemeContext;

  // click logic
  const handleSwitch = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div onClick={handleSwitch}>
        {isDark ? (
          <TiWeatherSunny className='switch-light' />
        ) : (
          <TiWeatherNight className='switch-dark' />
        )}
      </div>
    </div>
  );
};

export default Switch;

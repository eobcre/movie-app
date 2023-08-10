import { useState, useContext } from 'react';
import { DarkThemeContext } from '../../context/DarkThemeContext';

import '../Search/Search.scss';
import { BiSearch } from 'react-icons/bi';

// searchFunc function and parameter type
type SearchProps = {
  searchFunc: (searchQuery: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchFunc }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const ThemeContext = useContext(DarkThemeContext);

  // null check
  if (!ThemeContext) {
    throw new Error('DarkThemeContext is null.');
  }

  const { isDark } = ThemeContext;

  // input onChange logic
  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // reset logic
  const reset = () => {
    setSearchValue('');
  };

  // button onClick logic
  const handleOnClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchFunc(searchValue);
    reset();
  };

  return (
    <form>
      <div className='search-container'>
        <input
          type='text'
          onChange={handleOnChangeInput}
          value={searchValue}
          className='search-input'
        />
        <button onClick={handleOnClickButton} className='search-button'>
          <BiSearch
            className={isDark ? `search-icon-dark` : `search-icon-light`}
          />
        </button>
      </div>
    </form>
  );
};

export default Search;

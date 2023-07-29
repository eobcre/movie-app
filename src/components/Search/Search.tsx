import { useState } from 'react';

import '../Search/Search.scss';
import { BiSearch } from 'react-icons/bi';

// searchFunc function and parameter type
type SearchProps = {
  searchFunc: (searchQuery: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchFunc }) => {
  const [searchValue, setSearchValue] = useState<string>('');

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
          <BiSearch className='search-icon' />
        </button>
      </div>
    </form>
  );
};

export default Search;

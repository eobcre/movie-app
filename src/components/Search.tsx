import { useState } from 'react';
import '../scss/_search.scss';
import { BiSearch } from 'react-icons/bi';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className='search-container'>
        <input
          type='text'
          onChange={handleOnChangeInput}
          value={search}
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

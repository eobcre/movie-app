import { useState } from 'react';
import '../scss/_search.scss';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    console.log(inputValue);
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
        <button className='search-button'>
          <BiSearch className='search-icon' />
        </button>
      </div>
    </form>
  );
};

export default Search;

import '../scss/_search.scss';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const handleClick = () => {
    console.log('Test');
  };

  return (
    <div className='search-container'>
      <input type='text' className='search-input' />
      <button onClick={handleClick} className='search-button'>
        <BiSearch className='search-icon' />
      </button>
    </div>
  );
};

export default Search;

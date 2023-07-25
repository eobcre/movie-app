import '../scss/_search.scss';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='container'>
      <input type='text' />
      <BiSearch size={30} />
    </div>
  );
};

export default Search;

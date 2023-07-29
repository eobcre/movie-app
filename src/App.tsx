import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Movie from './components/Movie/Movie';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  // API KEY
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

  // calling API once
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Search />
      <div className='movies'>
        {movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;

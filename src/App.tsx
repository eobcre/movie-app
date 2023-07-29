import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Movie from './components/Movie/Movie';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // API KEY
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

  // retrieve API once
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  // search movies
  const searchFunc = (searchQuery: string) => {
    setLoading(true);
    setErrorMessage(null);

    // API KEY
    const API_SEARCH_URL = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`;

    fetch(API_SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Response === 'True') {
          setMovies(data.Search);
          setLoading(false);
        } else {
          setErrorMessage(data.Error);
          setLoading(false);
        }
      });
  };

  return (
    <>
      <Header />
      <Search searchFunc={searchFunc} />
      <div className='movies'>
        {loading && !errorMessage ? (
          <span className='loading-text'>Loading...</span>
        ) : !loading && errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </>
  );
};

export default App;

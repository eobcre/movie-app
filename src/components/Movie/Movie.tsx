import '../Movie/Movie.scss';

type Movie = {
  Title: string;
  Year: string;
  Poster: string;
};

type MovieProps = {
  movie: Movie;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  // console.log(movie);
  const DEFAULT_POSTER =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

  const poster = movie.Poster === 'N/A' ? DEFAULT_POSTER : movie.Poster;

  return (
    <div className='movie-container'>
      <img width='200' alt={`${movie.Title}`} src={poster} />
      <p>{movie.Title}</p>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;

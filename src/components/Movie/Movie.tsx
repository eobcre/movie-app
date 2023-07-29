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
  const DEFAULT_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

  const poster = movie.Poster === 'N/A' ? DEFAULT_IMAGE : movie.Poster;

  return (
    <div className='movie-container'>
      <p>{movie.Title}</p>
      <p>({movie.Year})</p>
      <img width='200' alt={`${movie.Title}`} src={poster} />
    </div>
  );
};

export default Movie;

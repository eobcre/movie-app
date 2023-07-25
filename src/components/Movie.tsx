type MovieProps = {
  props: {
    title: string;
    year: number;
    poster: string;
  };
};

const Movie: React.FC<MovieProps> = ({ props }) => {
  return (
    <div className='movie'>
      <h2>{props.title}</h2>
      <div>
        <img width='200' alt={`${props.title}`} />
      </div>
      <p>({props.year})</p>
    </div>
  );
};

export default Movie;

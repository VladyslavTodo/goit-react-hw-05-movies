import { useLocation } from 'react-router-dom';

import { Img, LinkLi, List, Name } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
	const location = useLocation();
	
return (
  <List>
    {movies?.map(movie => (
      <LinkLi
        key={movie.id}
        to={`/movies/${movie.id}`}
        state={{ from: location }}
      >
        <Img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.name}
        />
        <Name>{movie.title ? movie.title : movie.name}</Name>
      </LinkLi>
    ))}
  </List>
);
}

export default MoviesList;
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieSearch } from 'services/services';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm ';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovieSearch(movieName);
        setMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieName]);

  const onSearchMovies = value => {
    if (value === '') return;
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} />
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/services';

import {
  BoldText,
  BoxInfo,
  ItemCast,
  Poster,
  SpanTitle,
  Text,
  Title,
  GenresList,
  LinkLi,
  LinkCast,
  CastList,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <>
      <LinkLi to={backLink.current}>Back in black</LinkLi>
      {isLoading && <Loader />}
      <ItemCast>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <BoxInfo>
          <Title>
            {movie.title}&nbsp;
            <SpanTitle>({movie.release_date.substring(0, 4)})</SpanTitle>
          </Title>
          <BoldText>Overview: </BoldText>
          <Text>{movie.overview}</Text>
          <BoldText>Rate: {movie.vote_average}</BoldText>
          <BoldText>Popularity: {movie.popularity.toFixed(0)}%</BoldText>
          <GenresList>
            <p>Genres :</p>
            {movie.genres?.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </GenresList>
        </BoxInfo>
      </ItemCast>
      <CastList>
        <li>
          <LinkCast to="cast">Cast</LinkCast>
        </li>
        <li>
          <LinkCast to="reviews">Reviews</LinkCast>
        </li>
      </CastList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;

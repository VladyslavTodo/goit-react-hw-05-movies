import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/services';

import { Persone, List, Images, CastName, AnyCast } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && cast.length > 0 && (
        <List>
          {cast?.map(item => (
            <Persone key={item.id}>
              <Images
                src={
                  item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : 'http://placehold.it/100x150'
                }
                alt={item.name}
              />
              <CastName>{item.name}</CastName>
            </Persone>
          ))}
        </List>
      )}
      {!isLoading && cast.length === 0 && (
        <AnyCast>
          We don't have any information about cast for this movie
        </AnyCast>
      )}
    </>
  );
};

export default Cast;

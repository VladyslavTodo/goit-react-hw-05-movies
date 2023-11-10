import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'components/services/services';

import { Persone, List, Images, CastName } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
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
  );
};

export default Cast;

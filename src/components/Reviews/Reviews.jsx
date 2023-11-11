import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/services';

import {
  Author,
  Images,
  Item,
  List,
  Wrapper,
  Content,
  AnyReviews,
} from './Reviews.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && reviews.length > 0 && (
        <List>
          {reviews?.map(item => (
            <Item key={item.id}>
              <Wrapper>
                <Images
                  src={
                    item.author_details.avatar_path !== null
                      ? `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`
                      : 'http://placehold.it/100x150'
                  }
                  alt={item.author}
                />
                <Author>{item.author}</Author>
              </Wrapper>
              <Content>{item.content}</Content>
            </Item>
          ))}
        </List>
      )}
      {!isLoading && reviews.length === 0 && (
        <AnyReviews>We don't have any reviews for this movie</AnyReviews>
      )}
    </>
  );
};

export default Reviews;

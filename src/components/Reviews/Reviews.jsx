import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/services/services';

import {
  Author,
  Images,
  Item,
  List,
  Wrapper,
  Content,
  AnyReviews,
} from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <AnyReviews>We don't have any reviews for this movie</AnyReviews>
      ) : (
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
    </>
  );
};

export default Reviews;

import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 50px 30px; */
`;

export const Item = styled.li`
  /* width: 100px;
  height: 150px; */
  margin-bottom: 40px;
  background-color: #143034;
  color: #cbf9ff;
	padding: 30px;
	border-radius: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  align-items: center;
`;

export const Author = styled.h4`
  font-size: 22px;
`;


export const Images = styled.img`
width: 100px;
height: 100px;
  border-radius: 50%;
  margin-bottom: 2px;
`;

export const Content = styled.p`
  word-spacing: 2px;
  letter-spacing: 0.4px;
  font-size: 16px;
`;

export const AnyReviews = styled.p`
  font-size: 40px;
  color: #cbf9ff;
  text-align: center;
`;
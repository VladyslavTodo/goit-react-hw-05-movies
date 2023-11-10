import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const LinkLi = styled(Link)`
  width: 250px;
  height: auto;
  text-decoration: none;
  &:hover img {
    box-shadow: rgba(255, 255, 255, 0.25) 0px 54px 55px,
      rgba(255, 255, 255, 0.12) 0px -12px 30px,
      rgba(255, 255, 255, 0.12) 0px 4px 6px,
      rgba(255, 255, 255, 0.17) 0px 12px 13px,
      rgba(255, 255, 255, 0.09) 0px -3px 5px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 375px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  color: white;
  text-align: center;
  font-weight: 300;
  font-size: 22px;
  text-shadow: 5px 3px 3px #000000;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkLi = styled(Link)`
  border: 1px solid #cbf9ff;
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;
  color: #cbf9ff;
  display: inline-block;
  margin-top: 20px;
  &:hover {
    background-color: rgba(203, 249, 255, 0.1);
  }
`;

export const ItemCast = styled.li`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  width: 900px;
  padding-left: 100px;
`;

export const Poster = styled.img`
  height: 500px;
  width: 350px;
  border-radius: 10px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h3`
  font-family: system-ui;
  font-weight: 400;
  font-size: 35px;
  color: #cbf9ff;
`;

export const SpanTitle = styled.span`
  color: #f44336;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

export const BoldText = styled.h3`
  font-family: system-ui;
  font-weight: 700;
  color: #cbf9ff;
`;

export const Text = styled.h3`
  font-family: system-ui;
  font-weight: 400;
  color: #cbf9ff;
`;

export const GenresList = styled.ul`
  font-family: system-ui;
  font-weight: 400;
  color: #cbf9ff;
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const CastList = styled.ul`
  font-family: system-ui;
  font-weight: 400;
  color: #cbf9ff;
  display: flex;
  gap: 10px;
  font-size: 18px;
  margin-left: 200px;
`;

export const LinkCast = styled(Link)`
  border: 1px solid #cbf9ff;
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;
  color: #cbf9ff;
  display: inline-block;
  margin-top: 20px;
`;

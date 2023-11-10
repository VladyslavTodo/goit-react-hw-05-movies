import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #2b3035;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Link = styled(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #198754;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #198754;

  &.hover {
    color: white;
    background-color: #198754;
  }
  &.active {
    color: white;
    background-color: #198754;
  }
`;
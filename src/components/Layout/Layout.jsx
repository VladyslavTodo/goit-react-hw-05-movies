import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Nav, Link } from './Layout.styled';

import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;

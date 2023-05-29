import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Container,
  Header,
  Nav,
  StyledLink,
  Div,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Div>
    </Container>
  );
};

export default SharedLayout;

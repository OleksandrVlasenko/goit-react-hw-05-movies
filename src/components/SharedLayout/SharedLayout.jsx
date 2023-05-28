import { Outlet } from 'react-router-dom';
import {
  Container,
  Nav,
  StyledLink,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;

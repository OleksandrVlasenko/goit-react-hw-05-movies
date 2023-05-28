import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export { Container, Nav, StyledLink };

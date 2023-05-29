import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  border-bottom: 1px solid #000;
`;

const Nav = styled.nav`
  padding: 10px;
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Div = styled.div`
  padding: 10px;
`;

export { Container, Header, Nav, StyledLink, Div };

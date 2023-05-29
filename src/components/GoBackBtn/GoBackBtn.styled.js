import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LinkStyled = styled(NavLink)`
display: block;
padding: 3px;
border: 1px solid black;
width: 60px;
margin-bottom: 10px;

&:hover {
  color: orange
}
`
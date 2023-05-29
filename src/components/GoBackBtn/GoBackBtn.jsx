import { LinkStyled } from "./GoBackBtn.styled";

export const GoBackBtn = ({link}) => {
  return <LinkStyled to={link}>Go back</LinkStyled>;
}
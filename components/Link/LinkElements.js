import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { BsArrowRight } from "react-icons/bs";

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkText = styled.div`
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 600;
  color: white;
  margin-left: 10px;
  margin-right: 5px;

  ${breakpoint("md")`
        font-size: 1.4rem;
    `}
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

export const Arrow = styled(BsArrowRight)`
  font-size: 1.5rem;

  ${breakpoint("md")`
        font-size: 2rem;
    `}
`;

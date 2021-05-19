import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { BottomBorder } from "../../styles/commonStyles";
import { LinkItemContainer, LinkText } from "../LinkItem/LinkItemElements";

export const NavbarContainer = styled.nav`
  visibility: hidden;
  height: 4rem;
  z-index: 10;
  background-color: ${(props) => props.background};
  width: 100%;
  position: fixed;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;

  ${BottomBorder} {
    transform: translateY(1px);
  }

  ${breakpoint("md")`
  ${BottomBorder} {
    transform: translateY(2px);
  }
  `}
`;

export const NavbarLinkContainer = styled.span`
  display: flex;
  position: relative;

  ${breakpoint("md")`
    padding-top: 1rem;
  `}

  ${LinkItemContainer} {
    ${LinkText} {
      font-size: 1.25rem;
      ${breakpoint("md")`
   font-size: 1.5rem;
  `}
    }
  }
`;

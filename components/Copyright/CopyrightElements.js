import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const CopyrightContainer = styled.div`
  padding-bottom: ${(props) => props.theme.paddings.mediumMobile};
  ${breakpoint("md")`
  padding-bottom: ${(props) => props.theme.paddings.mediumDesktop};
  `}
`;

export const InnerContainer = styled.div`
  width: "100%";
  font-size: 0.875rem;
  position: relative;
  text-align: center;
  color: black;

  ${breakpoint("md")`
    font-size: 1rem;
  `}
`;

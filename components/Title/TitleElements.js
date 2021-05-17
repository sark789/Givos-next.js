import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const Content = styled.div`
  z-index: 2;
  position: absolute;
  top: 30%;
  left: 10%;

  ${breakpoint("md")`
      left: 14%;
      top: ${(props) => (props.top ? "24%" : "32%")};
    `}
`;

export const TitleContainer = styled.div``;

export const TitleText = styled.h2`
  display: inline;
  position: relative;
`;

export const NormalText = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  font-weight: 300;
  color: white;
  margin-left: 10px;
  margin-right: 5px;

  ${breakpoint("md")`
        font-size: 1.4rem;
    `}

  ${breakpoint("xl")`
        font-size: 1.875rem;
    `}
`;

export const LinkContainer = styled.div`
  white-space: nowrap;
  color: white;
  position: absolute;
  bottom: -10%;
  right: 0;
  right: ${(props) => (props.right ? "60%" : 0)};
  transform: translateX(100%) translateY(50%);
  overflow: hidden;
`;

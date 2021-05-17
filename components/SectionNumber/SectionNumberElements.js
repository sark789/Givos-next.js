import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const SectionNumberContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  padding: ${(props) => `${props.theme.paddings.small} 0`};
`;

export const NumberWrapper = styled.div`
  overflow: hidden;
`;

export const Number = styled.p`
  font-size: 0.875rem;

  ${breakpoint("md")`
        font-size: 1.125rem;
    `}
`;

export const LineWrapper = styled.div`
  position: relative;
  width: 26px;
  width: ${(props) => (props.vertical ? "1px" : "26px")};
  height: 1px;
  height: ${(props) => (props.vertical ? "26px" : "1px")};
  margin: auto 5px;
  margin: ${(props) => (props.vertical ? "5px auto" : "auto 5px")};
`;

export const Line = styled.div`
  position: absolute;
  width: 26px;
  width: ${(props) => (props.vertical ? "1px" : "26px")};
  background-color: white;
  background-color: ${(props) => props.color};
  height: 1px;
  height: ${(props) => (props.vertical ? "26px" : "1px")};
`;

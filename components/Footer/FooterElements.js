import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  ${breakpoint("xl")`
    width: 75%;
  `}
`;

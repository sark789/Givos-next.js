import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const OutterContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  margin-bottom: 0;
  height: fit-content;

  ${breakpoint("xl")`
      margin-bottom: 7.5rem;
      min-height: 100vh;
      width: 67%;
      `}
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  ${breakpoint("xl")`
      height: fit-content;
      margin-top: auto;
      min-height: 100vh;
      justify-content: center;
  `}
`;

export const MainDescriptionContainer = styled.div`
  width: 100%;

  ${breakpoint("xl")`
        width: 65%;
    `}
`;

export const LargePaddingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => `${props.theme.paddings.largeMobile} 0`};
  ${breakpoint("huge")`
  padding: ${(props) => `${props.theme.paddings.largeDesktop} 0`};
    `};
`;

export const PaddingContainer = styled.div`
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};
  ${breakpoint("xl")`
      padding: 1rem 0;
    `};
  ${breakpoint("huge")`
    padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};
    `};
`;

export const Half = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};

  ${breakpoint("xl")`
      width: 50%;
      padding: 1rem 0;
    `};
  ${breakpoint("huge")`
    padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};
    `};
`;

export const FlipContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${breakpoint("xl")`
      flex-direction: row;
       
    `};
`;

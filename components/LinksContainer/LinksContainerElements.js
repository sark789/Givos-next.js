import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => `${props.theme.paddings.largeMobile} 0`};
  width: 100%;

  ${breakpoint("md")`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => `${props.theme.paddings.largeDesktop} 0`};
`}
`;

export const SectionWrapper = styled.div`
  width: 100%;
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};

  ${breakpoint("md")`
  width: 38%;
`}
`;

export const SectionHeader = styled.h4`
  font-size: 1.75rem;
  color: black;
  color: ${(props) => props.color};
  overflow: hidden;

  ${breakpoint("md")`
  font-size: 2.25rem;
`}

  ${(props) =>
    props.isformenu &&
    css`
      ${breakpoint("md")`
        font-size: 3.5rem;
        `}
      
      }
    `}
`;

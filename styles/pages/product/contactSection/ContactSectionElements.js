import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const ContactSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) =>
    `calc(${props.theme.paddings.mediumMobile} + ${props.theme.paddings.largeMobile}) 0`};

  ${breakpoint("md")`
        padding: ${(props) =>
          `calc(${props.theme.paddings.mediumDesktop} + ${props.theme.paddings.largeDesktop}) 0`};
    `}

  ${breakpoint("xl")`
        width: 75%;
        margin: auto;
        padding: ${(props) =>
          `calc(3 * ${props.theme.paddings.mediumDesktop} + 2 * ${props.theme.paddings.largeDesktop}) 0`};
    `}
`;

export const ContactTextWrapper = styled.div`
  display: block;
`;

export const Span = styled.span`
  font-family: "Spectral", serif;
  display: block;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 32px;
  white-space: nowrap;

  ${breakpoint("md")`
        font-size: 3.5rem;
        line-height: 50px;
    `}
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: ${(props) => props.theme.paddings.mediumMobile};

  ${breakpoint("md")`
  padding-top: ${(props) => props.theme.paddings.mediumDesktop};
        `}

  ${breakpoint("xl")`
        flex-direction: row;
        `}
`;

export const TableRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  ${breakpoint("xl")`
        width: fit-content;
        `}
`;

export const TableCell = styled.div`
  padding-right: 0.75rem;
  height: 44px;
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
  white-space: nowrap;

  ${breakpoint("md")`
        font-size: 1.25rem;
        `}
  ${breakpoint("xl")`
      width: auto;
        `}
`;

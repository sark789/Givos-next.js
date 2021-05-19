import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { BottomBorder, TopBorder } from "../../commonStyles";

export const InnerContainer = styled.div`
  visibility: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.paddings.largeMobile};
  padding-top: ${(props) => props.theme.paddings.largeDesktop};

  h4,
  p {
    color: black;
  }

  h1 {
    line-height: 1;
  }

  ${TopBorder} {
    background-color: black;
  }

  ${BottomBorder} {
    background-color: black;
  }

  ${breakpoint("xl")`
        flex-direction: row-reverse;
        `}
`;

export const RightSide = styled.div`
  ${breakpoint("xl")`
      width: 67%;
      margin: auto;
`}
`;

export const TitleWrapper = styled.div`
  text-align: left;
  overflow: hidden;
`;
export const Title = styled.h1`
  color: black;
`;

export const MainDescriptionContainer = styled.div`
  width: 100%;
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};

  ${breakpoint("xl")`
        width: 65%;
    `}

  h3 {
    color: black;
  }
`;

export const PaddingContainer = styled.div`
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};
`;

export const LeftSide = styled.div`
  margin: 0 auto;
  ${breakpoint("xl")`
      width: 33%;

      ${PaddingContainer}{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-right: 20%;
      }
`}
`;

export const ImageContainer = styled.div`
  max-width: 700px;
  max-height: 700px;
  ${breakpoint("xl")`
        margin-bottom: -3rem;
        max-width: 100%;
        max-height: 100%;
  `}
`;

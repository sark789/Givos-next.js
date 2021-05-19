import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { Image } from "../../../components/ImageItem/ImageItemElements";

export const InnerContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: ${(props) => `${props.theme.paddings.largeDesktop} 0`};

  h4,
  p {
    color: black;
  }

  h1 {
    line-height: 1;
    color: black;
  }

  h3 {
    color: black;
    line-height: 1.1;
    font-style: italic;
  }
`;

export const OuterTitleWrapper = styled.div`
  width: fit-content;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.div`
  display: flex;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  justify-content: flex-end;
  align-items: center;
`;

export const Line = styled.div`
  background-color: black;
  width: 100%;
  height: 1px;
  margin-right: 0.35rem;

  ${breakpoint("md")`
    height: 2px;
    margin-right: 1rem;
    transform: translateY(-2px);
  `}
`;

export const GalleryContainer = styled.div`
  padding: ${(props) => `${props.theme.paddings.largeMobile} 0`};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
  column-gap: 1.5rem;

  ${breakpoint("md")`
  grid-template-columns: repeat(2, 1fr);
  `}

  ${breakpoint("xl")`
  grid-template-columns: repeat(3, 1fr);
  `}

  ${breakpoint("xl")`
    padding-top: 10vh;
  `}

  ${breakpoint("huge")`
  grid-template-columns: repeat(4, 1fr);
  `}
`;

export const ImageContainer = styled.div`
  ${Image} {
    aspect-ratio: 16/11;
    height: calc(100vw - 3rem);

    ${breakpoint("md")`
    height: 100%;
  `}
  }
`;

export const TextWrapper = styled.div`
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 32px;
  display: flex;
  flex-direction: column;

  ${breakpoint("md")`
        font-size: 3.5rem;
        line-height: 50px;
    `}
`;

export const OtherGalleryContainer = styled.div`
  width: 100%;
  margin: auto;

  padding-top: ${(props) => props.theme.paddings.mediumMobile};

  ${breakpoint("md")`
        padding: ${(props) =>
          `calc(${props.theme.paddings.mediumDesktop} + ${props.theme.paddings.largeDesktop}) 0`};
    `};
  ${breakpoint("xl")`
        width: 75%;
        padding: ${(props) =>
          `calc(3 * ${props.theme.paddings.mediumDesktop}  * ${props.theme.paddings.largeDesktop}) 0`};
    `};
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
        width: 66%;
        `}
`;

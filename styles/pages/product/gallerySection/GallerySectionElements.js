import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const GallerySectionWrapper = styled.div`
  position: relative;
  -webkit-transform: ${(props) => props.width < 1200 && "none !important"};
  transform: ${(props) => props.width < 1200 && "none !important"};

  ${breakpoint("xl")`
      position: absolute;
      left: 0; 
      top: ${(props) => props.startpoint};  
      padding-right: 5rem;
      width: 33%;
    `};
`;

export const GalleryInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${breakpoint("lg")`
      flex-direction: row;
      justify-content: space-around;
    `}
  ${breakpoint("xl")`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const GalleryTextWrapper = styled.div`
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 32px;
  padding: ${(props) => `${props.theme.paddings.mediumMobile} 0`};

  ${breakpoint("md")`
        font-size: 3.5rem;
        line-height: 50px;
        padding: ${(props) => `${props.theme.paddings.mediumDesktop} 0`};
    `}
`;

export const Span = styled.span`
  font-family: "Spectral", serif;
  display: block;
`;

export const LinkAndSectionNumberContainer = styled.div`
  position: relative;
  display: flex;
  ${breakpoint("xl")`
       max-width: 420px;
    `}
`;

export const LinkItemContainer = styled.div`
  width: 75%;
  position: relative;
`;

export const SectionNumberContainer = styled.div`
  width: 25%;
  color: white;
  margin: auto;
  display: flex;
  justify-content: flex-end;
`;

import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const OuterContent = styled.div`
  min-height: 100vh;
  visibility: hidden;
  position: relative;
  padding-top: ${(props) => props.theme.paddings.largeMobile};
  padding-bottom: ${(props) => props.theme.paddings.largeMobile};

  ${breakpoint("xl")`
      display: flex;
      flex-direction: column;
      justify-content: center;
  `}
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;

  ${breakpoint("xl")`
    margin-left:${(props) => props.theme.paddings.largeMobile};
    width: fit-content;
    
  `}
  ${breakpoint("xl")`
      padding: ${(props) => `0 ${props.theme.paddings.largeMobile}`};
  `}

  ${breakpoint("xxxl")`
      padding: ${(props) => `0 ${props.theme.paddings.largeDesktop}`};

  `}
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    line-height: 1;
  }

  ${breakpoint("xl")`
    flex-direction: row;
    justify-content: flex-end;
    padding-left:${(props) => props.theme.paddings.small};
    align-items: center;

  `}
`;

export const TitleWrapper = styled.div`
  text-align: left;
  overflow: hidden;

  ${breakpoint("xl")`
    margin: ${(props) => `${props.theme.paddings.mediumMobile} 0`};
  `}

  ${breakpoint("xxl")`
    margin: ${(props) => `${props.theme.paddings.largeMobile} 0`};
    margin-bottom: 10vh;
  `}
`;

export const GoogleMapsAndInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint("md")`
    flex-direction: row;
  `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

  ${breakpoint("md")`
    padding-left: ${(props) => props.theme.paddings.mediumMobile};
    justify-content: center;
  `}

  ${breakpoint("xl")`
    flex-direction: column;
    padding-left: ${(props) => props.theme.paddings.largeDesktop};
    padding-top: 0;
  `}

  ${breakpoint("xl")`
    top: -10vh;
  `}

  ${breakpoint("xxxl")`
    padding-left: 10vw;
  `}
`;

export const InfoElement = styled.div`
  padding-top: ${(props) => props.theme.paddings.mediumMobile};
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Text = styled.div`
  overflow: hidden;
  color: white;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
`;

export const GoogleMapsContainer = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.paddings.mediumMobile};
  width: 100%;
  height: 300px;

  ${breakpoint("md")`
    height: 500px;
    width: 50%;
  `}

  ${breakpoint("xl")`
    position: absolute;
    width: 100%;
    top: 4rem;
    left: 0;
    min-height: calc(100vh - 5.5rem);
    height: 91.5%;
  `}
`;

export const AnimationOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  top: 0;
  left: 0;
  z-index: 2;
`;

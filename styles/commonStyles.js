import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

//colors
export const DARK_COLOR = "#1E1E1E";
export const ORANGE_COLOR = "#DC481E";

//margins/paddings
export const LARGE_PADDING_DESKTOP = "6rem";
export const LARGE_PADDING_MOBILE = "3rem";
export const MEDIUM_PADDING_DESKTOP = "2.5rem";
export const MEDIUM_PADDING_MOBILE = "1.5rem";
export const SMALL_PADDING = "0.5rem";

//borders
export const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  pointer-events: none;
  background-color: ${(props) => props.color};
  height: 1px;
  transform: translateY(-0.5rem);
  transform: ${(props) => props.noTranslate && "translateY(0)"};

  ${(props) =>
    !props.isformenu &&
    css`
       ${breakpoint("md")`
          height: 2px;
    `}
      }
    `}
`;

export const BottomBorder = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  background-color: ${(props) => props.color};
  height: 1px;
  transform: translateY(0.5rem);
  transform: ${(props) => props.noTranslate && "translateY(0)"};

  ${(props) =>
    !props.isformenu &&
    css`
       ${breakpoint("md")`
          height: 2px;
    `}
      }
    `}
`;

export const LeftBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1px;
  background-color: white;
  height: 100%;

  ${breakpoint("md")`
  width: 2px;
    `}
`;

export const RightBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1px;
  background-color: white;
  height: 100%;

  ${breakpoint("md")`
  width: 2px;
    `}
`;

//containers
export const WideContainer = styled.div`
  width: 100vw;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${(props) => props.background};

  ${breakpoint("md")`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    `}
`;

export const InnerContainerWithLargePadding = styled.div`
  width: 100%;
  padding-top: ${LARGE_PADDING_MOBILE};
  padding-bottom: ${LARGE_PADDING_MOBILE};
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};

  ${breakpoint("md")`
      padding-top: ${LARGE_PADDING_DESKTOP};
    `}
  ${breakpoint("md")`
      padding-bottom: ${LARGE_PADDING_DESKTOP};
    `}
`;

export const InnerContainerWithMediumPadding = styled.div`
  width: ${(props) => props.width};
  padding-top: ${MEDIUM_PADDING_MOBILE};
  padding-bottom: ${MEDIUM_PADDING_MOBILE};
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};

  ${breakpoint("md")`
      padding-bottom: ${MEDIUM_PADDING_DESKTOP};
    `}
  ${breakpoint("md")`
      padding-top: ${MEDIUM_PADDING_DESKTOP};
    `}
`;

export const InnerContainerWithSmallPadding = styled.div`
  width: 100%;
  padding-top: ${SMALL_PADDING};
  padding-bottom: ${SMALL_PADDING};
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "column" : "row")};
`;

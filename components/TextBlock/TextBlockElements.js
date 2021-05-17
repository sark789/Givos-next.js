import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const TextBlockContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InnerBlockContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: ${(props) => props.theme.paddings.small};
  padding-bottom: ${(props) => props.theme.paddings.small};

  ${breakpoint("xl")`
    width: 85%;
  `}
`;

export const InnerBlockContainerWithSub = styled.div`
  display: flex;
  padding-top: ${(props) => props.theme.paddings.small};
  padding-bottom: ${(props) => props.theme.paddings.small};
  ${breakpoint("xl")`
    padding-right: 4rem;
  `}
`;

export const Title = styled.h4`
  text-align: left;
  padding-top: ${(props) => props.theme.paddings.small};
  padding-bottom: ${(props) => props.theme.paddings.small};
`;

export const SubtitleContainer = styled.div`
  display: flex;
  height: fit-content;
  min-width: 85px;
  font-weight: bold;
`;

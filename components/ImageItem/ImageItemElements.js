import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const ImageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: ${(props) =>
    props.titleOnTop ? "column-reverse" : "column"};
  visibility: hidden;
  visibility: ${(props) => props.visibility};
  width: 100%;

  ${breakpoint("xl")`
        margin-bottom: ${(props) => props.marginBottom};
    `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100vw - 2rem);
  max-width: 420px;
  max-height: 420px;

  ${(props) =>
    props.fullSize &&
    css`
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const ImageTitleContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;

export const ImageIndex = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  margin-right: 1.5rem;
`;

export const ImageTitle = styled.p``;

export const ImageOverlayForAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 2;
`;

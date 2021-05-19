import styled from "styled-components";

export const LayerContainer = styled.div`
  visibility: hidden;
  background-color: white;
  height: calc(100vh);
  z-index: -5;
  padding-top: 5rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SectionNumberContainer = styled.div`
  z-index: 2;
  white-space: nowrap;
  color: white;
  position: absolute;
  bottom: 5%;
  right: 3%;
  overflow: hidden;
`;

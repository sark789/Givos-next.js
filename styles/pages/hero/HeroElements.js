import styled, { css } from "styled-components";

export const HeroContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;

  ${(props) =>
    props.isDesktop &&
    css`
      padding-top: 0; /*temp*/
    `}
`;

export const ImageContainer = styled.div`
  height: 70vh;
  width: 100vw;
  margin-bottom: 40px;
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.isDesktop &&
    css`
      margin-bottom: 0;
      height: 100vh;
      position: sticky;
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

import styled from "styled-components";

export const PageTransitionOverlay = styled.div`
  position: absolute;
  display: none;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.dark};
`;

import styled from "styled-components";
import { WideContainer } from "../../styles/commonStyles";
import { breakpoint } from "styled-components-breakpoint";

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  height: 0;
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  touch-action: none;
  -ms-touch-action: none;

  ${WideContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;

  transform: translateY(-10vh);
  flex-direction: column;

  ${breakpoint("xl")`
    width: 75%;
    transform: translateY(-5rem);
  `}
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  bottom: 10%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${breakpoint("xxl")`
  justify-content: flex-start;
  padding-left: 59%;

  `}
`;

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  ${breakpoint("xxl")`
    padding-right: 2.5rem;

  `}
`;

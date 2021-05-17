import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const SliderMenuContainer = styled.div`
  position: fixed;
  bottom: 7.5%;
  display: flex;
  flex-direction: column;

  padding-left: 1rem;

  ${breakpoint("md")`
        padding-left: 1.5rem;
    `}
`;

export const SlideItemContainer = styled.div`
  position: relative;
  overflow-y: hidden;
  display: flex;
  margin-top: 14px;
  align-items: center;
`;

export const SlideItemText = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Bullet = styled.div`
  display: ${(props) => props.display};
  height: 1px;
  width: 0;
  margin-right: 0;
  background-color: white;
`;

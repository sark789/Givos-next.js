import React, { useLayoutEffect, useRef } from "react";
import {
  Line,
  LineWrapper,
  Number,
  NumberWrapper,
  SectionNumberContainer,
} from "./SectionNumberElements";
import { SectionNumberTriggerAnimation } from "./SectionNumberAnimations";

const SectionNumber = ({
  vertical = false,
  number = "01",
  initialAnimation = false,
  color = "white",
  dontAnimate = false,
}) => {
  const num1Ref = useRef();
  const num2Ref = useRef();

  useLayoutEffect(() => {
    if (!dontAnimate) {
      SectionNumberTriggerAnimation({
        lineRef: `.line-to-animate${number}`,
        startDelay: initialAnimation ? 0.2 : 0,
        triggerOffset: initialAnimation ? 0 : 150,
        vertical: vertical,
        num1Ref: num1Ref.current,
        num2Ref: num2Ref.current,
      });
    }
  }, []);

  return (
    <SectionNumberContainer vertical={vertical}>
      <NumberWrapper>
        <Number ref={num1Ref}>{number}</Number>
      </NumberWrapper>
      <LineWrapper vertical={vertical}>
        <Line
          className={`line-to-animate${number}`}
          vertical={vertical}
          color={color}
        />
        <Line
          className={`line-to-animate${number}`}
          vertical={vertical}
          color={color}
        />
      </LineWrapper>
      <NumberWrapper>
        <Number ref={num2Ref}>04</Number>
      </NumberWrapper>
    </SectionNumberContainer>
  );
};

export default SectionNumber;

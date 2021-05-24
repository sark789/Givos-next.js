import React, { useEffect, useRef } from "react";
import {
  Content,
  TitleContainer,
  TitleText,
  NormalText,
  LinkContainer,
  Underline,
} from "./TitleElements";
import TitleAnimation, { UnderlineAnimation } from "./TitleAnimation";
import LinkTo from "../Link/index";
import gsap from "gsap";

var underlineWidth = "100%";

const Title = ({
  titles,
  index,
  isForProductPage = false,
  linkRef,
  forceScrollStop = null,
}) => {
  var tag = !isForProductPage ? "h2" : "h1";
  const containerRef = useRef();
  const item1Ref = useRef();
  const item2Ref = useRef();
  const item3Ref = useRef();
  const underlineRef = useRef();

  function getFirstWord(str) {
    let spaceIndex = str.indexOf(" ");
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
  }

  function getSecondWord(str) {
    let spaceIndex = str.indexOf(" ");
    return spaceIndex === -1 ? str : str.substr(spaceIndex, str.length);
  }

  useEffect(() => {
    gsap.set(containerRef.current, {
      visibility: "visible",
    });
    underlineWidth = !isForProductPage ? "100%" : "40%";

    TitleAnimation(
      item1Ref.current,
      item2Ref.current,
      item3Ref.current,
      1.6,
      1
    );
    UnderlineAnimation({
      underlineRef: underlineRef.current,
      underlineWidth: underlineWidth,
      startDelay: 1.6,
      duration: 1,
    });
  }, []);

  return (
    <Content top={isForProductPage} ref={containerRef}>
      <div style={{ overflow: "hidden" }}>
        <TitleContainer ref={item1Ref} className={` animation1-${index}`}>
          <TitleText as={tag}>{getFirstWord(titles[index])}</TitleText>
        </TitleContainer>
      </div>
      <div style={{ overflow: "hidden" }}>
        <TitleContainer ref={item2Ref} className={` animation2-${index}`}>
          <TitleText as={tag}>{getSecondWord(titles[index])}</TitleText>
        </TitleContainer>
      </div>
      <Underline
        ref={underlineRef}
        className={`underline-animation-${index}`}
      />
      <LinkContainer right={isForProductPage}>
        <div ref={item3Ref} className={`animation3-${index}`}>
          {!isForProductPage ? (
            <LinkTo
              linkRef={`ograje/${linkRef[index]}`}
              forceScrollStop={forceScrollStop}
            />
          ) : (
            <NormalText> Kle neki neki</NormalText>
          )}
        </div>
      </LinkContainer>
    </Content>
  );
};

export default Title;

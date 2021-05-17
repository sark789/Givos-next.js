import React, { useLayoutEffect } from "react";
import {
  Content,
  TitleContainer,
  TitleText,
  NormalText,
  LinkContainer,
} from "./TitleElements";
import Underline from "../Underline/index";
import TitleAnimation from "./TitleAnimation";
import UnderlineAnimation from "../Underline/UnderlineAnimations";
import LinkTo from "../Link/index";

var underlineWidth = "100%";

const Title = ({ titles, index, isForProductPage = false, linkRef }) => {
  var tag = !isForProductPage ? "h2" : "h1";

  function getFirstWord(str) {
    let spaceIndex = str.indexOf(" ");
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
  }

  function getSecondWord(str) {
    let spaceIndex = str.indexOf(" ");
    return spaceIndex === -1 ? str : str.substr(spaceIndex, str.length);
  }

  useLayoutEffect(() => {
    underlineWidth = !isForProductPage ? "100%" : "40%";

    TitleAnimation(".animation1", ".animation2", ".animation3", 1, 1.25);
    UnderlineAnimation({
      underlineRef: ".underline-animation",
      underlineWidth: underlineWidth,
    });
  }, []);

  return (
    <Content top={isForProductPage}>
      <div style={{ overflow: "hidden" }}>
        <TitleContainer className={`animation1 animation1-${index}`}>
          <TitleText as={tag}>{getFirstWord(titles[index])}</TitleText>
        </TitleContainer>
      </div>
      <div style={{ overflow: "hidden" }}>
        <TitleContainer className={`animation2 animation2-${index}`}>
          <TitleText as={tag}>{getSecondWord(titles[index])}</TitleText>
        </TitleContainer>
      </div>
      <Underline classname={`underline-animation-${index}`} />
      <LinkContainer right={isForProductPage}>
        <div className={`animation3 animation3-${index}`}>
          {!isForProductPage ? (
            <LinkTo linkRef={`ograje/${linkRef[index]}`} />
          ) : (
            <NormalText> Kle neki neki</NormalText>
          )}
        </div>
      </LinkContainer>
    </Content>
  );
};

export default Title;

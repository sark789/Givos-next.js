import React, { useLayoutEffect, useRef, useEffect } from "react";
import { WideContainer } from "../../../../styles/commonStyles";
import {
  Image,
  ImageContainer,
  LayerContainer,
  SectionNumberContainer,
} from "./LandingSectionElements";

import Title from "../../../../components/Title";
import PictureOverlay from "../../../../components/PictureOverlay";
import FadeIn from "../../../../commonAnimations/FadeIn";
import SectionNumber from "../../../../components/SectionNumber";
import { LandingSectionPinAnimation } from "./LandingSectionAnimations";
import { useWindowSize } from "react-use";
import isTouchDevice from "../../../../utils/isTouchDevice";

const LandingSection = ({ image, alt, title }) => {
  let titleToArray = [];
  titleToArray.push(title);
  const { height } = useWindowSize();
  const layerRef = useRef();

  useLayoutEffect(() => {
    FadeIn(".product-image-animation");
  }, []);

  useEffect(() => {
    if (!isTouchDevice()) {
      LandingSectionPinAnimation({
        height: height,
        layerRef: layerRef.current,
        imageRef: ".image-pin",
      });
    }
  }, [height]);

  useEffect(() => {
    console.log("dsds");
    LandingSectionPinAnimation({
      height: height,
      layerRef: layerRef.current,
      imageRef: ".image-pin",
    });
  }, []);

  return (
    <LayerContainer ref={layerRef}>
      <WideContainer>
        <ImageContainer>
          <Image
            className="product-image-animation image-pin"
            src={image}
            alt={alt}
          />
          <PictureOverlay className="product-image-animation image-pin" />
          <Title titles={titleToArray} index={0} isForProductPage={true} />
          <SectionNumberContainer>
            <SectionNumber
              vertical={true}
              number="01"
              initialAnimation={true}
            />
          </SectionNumberContainer>
        </ImageContainer>
      </WideContainer>
    </LayerContainer>
  );
};

//dummy data
const dummyImage =
  "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

const dummyAlt = "picture 1";
const dummyTitle = "Title One";

//defaults
LandingSection.defaultProps = {
  image: dummyImage,
  alt: dummyAlt,
  title: dummyTitle,
};

export default LandingSection;

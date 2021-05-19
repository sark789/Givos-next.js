import React, { useRef, useEffect } from "react";
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
import gsap from "gsap";

const LandingSection = ({ image, alt, title }) => {
  let titleToArray = [];
  titleToArray.push(title);
  const { height } = useWindowSize();
  let layerRef = useRef();

  useEffect(() => {
    gsap.set(layerRef, {
      visibility: "visible",
      height: "calc(100vh - 4rem)",
    });

    FadeIn(".product-image-animation");

    LandingSectionPinAnimation({
      height: height,
      layerRef: layerRef,
      imageRef: ".image-pin",
    });
  }, []);

  useEffect(() => {
    if (!isTouchDevice()) {
      LandingSectionPinAnimation({
        height: height,
        layerRef: layerRef,
        imageRef: ".image-pin",
      });
    }
  }, [height]);

  return (
    <LayerContainer ref={(el) => (layerRef = el)}>
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

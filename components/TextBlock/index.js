import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BorderAnimation from "../../commonAnimations/BorderAnimation";
import FadeIn from "../../commonAnimations/FadeIn";
import { TopBorder, BottomBorder } from "../../styles/commonStyles";

import {
  InnerBlockContainer,
  InnerBlockContainerWithSub,
  SubtitleContainer,
  TextBlockContainer,
  Title,
} from "./TextBlockElements";

var isInited = false;

const TextBlock = ({
  title,
  subtitleArray,
  textArray,
  isWithSubtitles = false,
  hideBottomBorder = false,
  animation = { shouldAnimate: false, isPictureLoaded: false },
}) => {
  let containerRef = useRef();
  const { shouldAnimate, isPictureLoaded } = animation;

  useEffect(() => {
    if (shouldAnimate) {
      FadeIn(".about-us-info-animation", 0.2, 1, 1.2);
      BorderAnimation({
        lineRef: ".about-us-border-animation",
        stagger: 0.2,
        delay: 1,
        duration: 1.6,
      });
    }
  }, []);

  return (
    <TextBlockContainer ref={(el) => (containerRef = el)}>
      <TopBorder className="about-us-border-animation" />
      <div style={{ overflow: "hidden" }}>
        <Title className="about-us-info-animation">{title}</Title>
      </div>
      {isWithSubtitles
        ? subtitleArray.map((subtitleItem, index) => (
            <InnerBlockContainerWithSub key={index}>
              <SubtitleContainer>{subtitleItem.subtitle}</SubtitleContainer>
              <p>{subtitleItem.text}</p>
            </InnerBlockContainerWithSub>
          ))
        : textArray.map((textItem, index) => (
            <InnerBlockContainer key={index}>
              <div style={{ overflow: "hidden" }}>
                <p className="about-us-info-animation">{textItem}</p>
              </div>
            </InnerBlockContainer>
          ))}
      {!hideBottomBorder && (
        <BottomBorder className="about-us-border-animation" />
      )}
    </TextBlockContainer>
  );
};

//dummy data
const dummyTitle = "Opis";
const dummyTextArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
];

//defaults
TextBlock.defaultProps = {
  title: dummyTitle,
  textArray: dummyTextArray,
};
export default TextBlock;

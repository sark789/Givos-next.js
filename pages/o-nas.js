import React, {
  useContext,
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
} from "react";
import {
  InnerContainerWithSmallPadding,
  WideContainer,
} from "../styles/commonStyles";
import {
  InnerContainer,
  LeftSide,
  RightSide,
  MainDescriptionContainer,
  PaddingContainer,
  Title,
  TitleWrapper,
  ImageContainer,
} from "../styles/pages/aboutus/AboutUsElements";
import Navbar from "../components/Navbar/index";
import TextBlock from "../components/TextBlock";
import ImageItem from "../components/ImageItem";
import Footer from "../components/Footer";
import { ThemeContext } from "styled-components";
import FadeIn from "../commonAnimations/FadeIn";
import gsap from "gsap/dist/gsap";
import FadeInWithOpacity from "../commonAnimations/FadeInWithOpacity";
import useWindowSize from "../utils/useWindowSize";
import {
  aboutUsMainDescriptionData,
  aboutUsInfoData,
  aboutUsPictureInfo,
} from "../public/data/data";

const AboutUs = ({
  mainDescription = aboutUsMainDescriptionData,
  infoData = aboutUsInfoData,
  pictureInfo = aboutUsPictureInfo,
}) => {
  const themeContext = useContext(ThemeContext);
  const textContentRef = useRef();
  const [isPictureLoaded, setIsPictureLoaded] = useState(false);
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    gsap.set(".about-us-container", {
      visibility: "hidden",
    });
  }, []);

  useEffect(() => {
    gsap.set(".about-us-container", {
      visibility: "visible",
    });
    FadeIn(".aboutus-title-animation", 0, 0.7);
    FadeInWithOpacity({
      itemRef: textContentRef.current,
      ease: "power2.out",
      delay: 1.5,
      duration: 0.8,
    });
  }, []);

  return (
    <div style={{ position: "absolute", backgroundColor: "white" }}>
      <Navbar />
      <WideContainer>
        <InnerContainer className="about-us-container">
          <RightSide>
            {width < themeContext.breakpoints.xl && (
              <TitleWrapper>
                <Title className="aboutus-title-animation">O nas</Title>
              </TitleWrapper>
            )}
            <MainDescriptionContainer ref={textContentRef}>
              <h3>&emsp; {mainDescription}</h3>
            </MainDescriptionContainer>
            <PaddingContainer className="aboutus-info">
              {infoData.map((item, index) => (
                <InnerContainerWithSmallPadding key={item.title}>
                  <TextBlock
                    animation={{
                      shouldAnimate: true,
                      isPictureLoaded: { isPictureLoaded },
                    }}
                    title={item.title}
                    textArray={item.text}
                    hideBottomBorder={
                      index === infoData.length - 1 ? false : true
                    }
                  />
                </InnerContainerWithSmallPadding>
              ))}
            </PaddingContainer>
          </RightSide>
          <LeftSide>
            <PaddingContainer>
              {width >= themeContext.breakpoints.xl && (
                <TitleWrapper>
                  <Title className="aboutus-title-animation">O nas</Title>
                </TitleWrapper>
              )}
              <ImageContainer>
                <ImageItem
                  titleOnTop={false}
                  title={pictureInfo.title[0]}
                  alt={pictureInfo.title[0]}
                  image={pictureInfo.image[0]}
                  index={0}
                  animateFadeIn={
                    width < themeContext.breakpoints.xl ? false : true
                  }
                  setIsPictureLoaded={setIsPictureLoaded}
                />
              </ImageContainer>
            </PaddingContainer>
          </LeftSide>
        </InnerContainer>
      </WideContainer>
      <Footer />
    </div>
  );
};

//dummy data
/* const dummyMainDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet nascetur in duis nibh enim sit merg ora.";

const dummyInfoData = [
  {
    title: "title1",
    text: ["text1"],
  },
  {
    title: "title2",
    text: ["text2"],
  },
];

//defaults
AboutUs.defaultProps = {
  mainDescription: dummyMainDescription,
  infoData: dummyInfoData,
}; */

export default AboutUs;

import React, { useContext, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/index";
import { WideContainer } from "../styles/commonStyles";
import {
  GoogleMapsContainer,
  InfoContainer,
  InfoElement,
  InnerContainer,
  Text,
  TitleWrapper,
  Content,
  AnimationOverlay,
  OuterContent,
  GoogleMapsAndInfoContainer,
} from "../styles/pages/contact/ContactElements";
import { ThemeContext } from "styled-components";
import FadeIn from "../commonAnimations/FadeIn";
import FadeInOverlay from "../commonAnimations/FadeInOverlay";
import BorderAnimation from "../commonAnimations/BorderAnimation";
import gsap from "gsap";
import Form from "../components/Form";
import { formData } from "../public/data/data";
import GoogleMaps from "../components/GoogleMaps";
import useWindowSize from "../utils/useWindowSize";
import _ from "lodash";
import { contactInfoData as data } from "../public/data/data";

const Contact = ({ contactInfoData = data }) => {
  const themeContext = useContext(ThemeContext);
  const { width, canAnimate } = useWindowSize();
  let titleRef = useRef();
  let infoWidth = width < themeContext.breakpoints.md ? "170px" : "190px";

  useEffect(() => {
    if (canAnimate) {
      gsap.set(".content", { autoAlpha: 1 });
      FadeIn(titleRef, 0, 0.2);
      FadeInOverlay({ itemRef: ".contact-overlay-animation" });
      FadeIn(".contact-info-animation", -0.2, 0.4, 1.2);
      //inputs
      BorderAnimation({
        lineRef: ".contact-border-animation",
        stagger: -0.2,
        delay: 0.6,
        duration: 1.2,
      });
      //textArea - vertical
      BorderAnimation({
        lineRef: ".contact-border-animation-vertical",
        stagger: -0.2,
        delay: 0.6,
        duration: 1.2,
        isVertical: true,
      });
    }
  }, [canAnimate]);

  const removeOverlay = () => {
    gsap.set(".contact-overlay-animation", { height: 0 });
  };

  useEffect(() => {
    window.addEventListener("resize", _.debounce(removeOverlay, 250));
    return () => {
      window.removeEventListener("resize", _.debounce(removeOverlay, 250));
    };
  }, []);

  return (
    <div style={{ position: "absolute" }}>
      <Navbar background={themeContext.colors.dark} color="white" />
      <WideContainer background={themeContext.colors.dark}>
        <OuterContent className="content">
          <Content>
            <TitleWrapper>
              <h1 ref={(el) => (titleRef = el)}>Kontakt</h1>
            </TitleWrapper>
            <InnerContainer>
              <Form formData={formData} />
              <GoogleMapsAndInfoContainer>
                {width < themeContext.breakpoints.xl && (
                  <GoogleMapsContainer>
                    <GoogleMaps
                      center={{
                        lat: 46.25645455194671,
                        lng: 14.43717557701904,
                      }}
                    />
                    <AnimationOverlay className="contact-overlay-animation" />
                  </GoogleMapsContainer>
                )}
                <InfoContainer>
                  {contactInfoData.map((item) => (
                    <InfoElement key={item.title}>
                      <Text color="rgba(255, 255, 255, 0.6)">
                        <p className="contact-info-animation">{item.title}</p>
                      </Text>
                      {item.text.map((innerItem, index) => (
                        <div key={innerItem[index]} style={{ display: "flex" }}>
                          <Text width={infoWidth}>
                            <p
                              className="contact-info-animation"
                              style={{
                                width: infoWidth,
                              }}
                            >
                              {innerItem}
                            </p>
                          </Text>
                          {item.text2 && (
                            <Text>
                              <p className="contact-info-animation">
                                {item.text2[index]}
                              </p>
                            </Text>
                          )}
                        </div>
                      ))}
                    </InfoElement>
                  ))}
                </InfoContainer>
              </GoogleMapsAndInfoContainer>
            </InnerContainer>
          </Content>
          {width >= themeContext.breakpoints.xl && (
            <GoogleMapsContainer>
              <GoogleMaps
                center={{
                  lat: 46.25645455194671,
                  lng: 14.23,
                }}
              />
              <AnimationOverlay className="contact-overlay-animation" />
            </GoogleMapsContainer>
          )}
        </OuterContent>
      </WideContainer>
      <Footer />
    </div>
  );
};

/* //dummy data
const dummyContactInfoData = [
  {
    title: "title1:",
    text: ["text1"],
  },
  {
    title: "title2:",
    text: ["text2.1", "text3.1", "text4.1"],
    text2: ["text2.2", "text3.2", "text4.2"],
  },
];

//defaults
Contact.defaultProps = {
  contactInfoData: dummyContactInfoData,
}; */

export default Contact;

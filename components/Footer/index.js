import React, { useContext, useEffect, useRef } from "react";
import { WideContainer } from "../../styles/commonStyles";
import { ThemeContext } from "styled-components";
import LinksContainer from "../LinksContainer";
import { footerAndMenuData } from "../../public/data/data";
import { InnerContainer } from "./FooterElements";
import { FooterFadeIn } from "./FooterAnimations";
import isTouchDevice from "../../utils/isTouchDevice";
import Copyright from "../Copyright";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = ({ color = "black" }) => {
  const themeContext = useContext(ThemeContext);
  const itemRef = useRef();
  const outterContainerRef = useRef();

  const handler = () => {
    if (!isTouchDevice()) {
      var trig1 = ScrollTrigger.getById("footer-fade-in");
      if (trig1) {
        trig1.kill();
      }
      FooterFadeIn({
        itemRef: itemRef.current,
        containerRef: outterContainerRef.current,
      });
    }
  };

  useEffect(() => {
    if (!isTouchDevice()) {
      FooterFadeIn({
        itemRef: itemRef.current,
        containerRef: outterContainerRef.current,
      });
    }

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <WideContainer
      background={
        color === "black"
          ? themeContext.colors.orange
          : themeContext.colors.dark
      }
      ref={outterContainerRef}
      style={{ overflow: "hidden" }}
      className="footer-container"
    >
      <InnerContainer ref={itemRef}>
        <LinksContainer color={color} linksData={footerAndMenuData} />
        <Copyright color={color} />
      </InnerContainer>
    </WideContainer>
  );
};

export default Footer;

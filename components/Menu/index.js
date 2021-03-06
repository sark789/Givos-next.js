import React, { useContext, useEffect, useRef } from "react";
import { WideContainer } from "../../styles/commonStyles";
import LinksContainer from "../LinksContainer";
import {
  ExtraInfoContainer,
  InfoElement,
  InnerContainer,
  MenuContainer,
} from "./MenuElements";
import { footerAndMenuData } from "../../public/data/data";
import gsap from "gsap";
import Navbar from "../Navbar";
import { ThemeContext } from "styled-components";
import { MenuAnimation } from "./MenuAnimations";
import { MenuContext } from "../../utils/MenuContext";
import useWindowSize from "../../utils/useWindowSize";

let isInited = false;

const Menu = ({ menuInfoData }) => {
  const themeContext = useContext(ThemeContext);
  let containerRef = useRef(null);
  let infoRef = useRef(null);
  let navbarRef = useRef(null);
  const [isMenuOpened] = useContext(MenuContext);
  const { shouldOpenMenu } = isMenuOpened;
  const { width } = useWindowSize();

  const onComplete = () => {
    gsap.set(document.body, {
      overflow: "unset",
      touchAction: "unset",
      pointerEvents: "unset",
    });
  };

  useEffect(() => {
    if (isInited) {
      gsap.set(document.body, {
        overflow: "hidden",
        touchAction: "none",
        pointerEvents: "none",
      });

      MenuAnimation({
        onComplete: onComplete,
        isMenuOpened: shouldOpenMenu,
        containerRef: containerRef,
        links: ".link-text-animation",
        infoRef: infoRef,
        navbarRef: navbarRef.current,
      });
    }
    isInited = true;
  }, [shouldOpenMenu]);

  return (
    <MenuContainer ref={(el) => (containerRef = el)}>
      <Navbar
        isformenu
        ref={navbarRef}
        color="white"
        background={themeContext.colors.dark}
      />
      <WideContainer>
        <InnerContainer>
          <LinksContainer
            linksData={footerAndMenuData}
            color="white"
            isformenu={true}
            linkAnimationClass="link-text-animation"
          />
        </InnerContainer>
        {width >= themeContext.breakpoints.md && (
          <ExtraInfoContainer ref={(el) => (infoRef = el)}>
            {menuInfoData.map((item) => (
              <InfoElement key={item.title}>
                <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  {item.title}
                </span>
                <span>{item.text}</span>
              </InfoElement>
            ))}
          </ExtraInfoContainer>
        )}
      </WideContainer>
    </MenuContainer>
  );
};

//dummy data
const dummyMenuInfoData = [
  {
    title: "title1",
    text: "text1",
  },
  {
    title: "title2",
    text: "text2",
  },
  {
    title: "title3",
    text: "text3",
  },
];

//defaults
Menu.defaultProps = {
  menuInfoData: dummyMenuInfoData,
};

export default Menu;

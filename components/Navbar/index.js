import React, { useEffect, useRef, useContext } from "react";
import { BottomBorder, WideContainer } from "../../styles/commonStyles";
import { MenuContext } from "../../utils/MenuContext";
import { InitialNavbarAnimation, NavbarPin } from "./NavbarAnimations";
import {
  InnerContainer,
  NavbarContainer,
  NavbarLinkContainer,
} from "./NavbarElements";
import LinkItem from "../LinkItem";
import gsap from "gsap";
import logo from "../../public/images/givos_logo.png";

const Navbar = (
  {
    isForHeroPage = false,
    isformenu = false,
    background = "white",
    color = "black",
  },
  ref
) => {
  const lineRef = useRef();
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  const { shouldOpenMenu, isRouteFromMenu } = isMenuOpened;

  const onClickHandler = (e) => {
    var isToHome = e.currentTarget.classList.contains("menu-home-link");
    if (!isToHome || (!shouldOpenMenu && isToHome)) {
      setIsMenuOpened({
        shouldOpenMenu: !shouldOpenMenu,
        canAnimate: true,
        isRouteFromMenu: isRouteFromMenu,
      });
    }
  };

  useEffect(() => {
    gsap.set(".navbar-container", {
      visibility: "visible",
    });
    InitialNavbarAnimation({
      lineRef: !isForHeroPage ? lineRef.current : null,
      linkRef: ".navbar-link-animation",
      isForHeroPage: isForHeroPage,
    });
  }, []);

  return (
    <NavbarContainer
      ref={ref}
      isForHeroPage={isForHeroPage}
      isformenu={isformenu}
      className="navbar-container"
      background={background}
      color={color}
    >
      <WideContainer>
        <InnerContainer>
          <NavbarLinkContainer className="navbar-link-animation">
            <span onClick={(e) => onClickHandler(e)} className="menu-home-link">
              <LinkItem
                text={logo}
                color={color}
                hideArrow={true}
                width={"auto"}
                linkRef="/"
                isLogo
              />
            </span>
          </NavbarLinkContainer>

          <NavbarLinkContainer className="navbar-link-animation">
            <span onClick={onClickHandler}>
              <LinkItem
                text={isformenu ? "Zapri" : "Menu"}
                color={color}
                hideArrow={true}
                width={"auto"}
              />
            </span>
          </NavbarLinkContainer>
          {!isForHeroPage && !isformenu && (
            <BottomBorder ref={lineRef} color={color} noTranslate />
          )}
        </InnerContainer>
      </WideContainer>
    </NavbarContainer>
  );
};

const forwardedNavbar = React.forwardRef(Navbar);

export default forwardedNavbar;

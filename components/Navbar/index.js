import React, { useEffect, useLayoutEffect, useRef, useContext } from "react";
import { BottomBorder, WideContainer } from "../../styles/commonStyles";
import { MenuContext } from "../../utils/MenuContext";
import { InitialNavbarAnimation, NavbarPin } from "./NavbarAnimations";
import {
  InnerContainer,
  NavbarContainer,
  NavbarLinkContainer,
} from "./NavbarElements";
import LinkItem from "../LinkItem";
var isInited = false;
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
  const { shouldOpenMenu, canAnimate } = isMenuOpened;

  const onClickHandler = () => {
    if (canAnimate) {
      setIsMenuOpened({ shouldOpenMenu: !shouldOpenMenu, canAnimate: false });
    }
  };

  useLayoutEffect(() => {
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
            <span>
              <LinkItem
                text="Givos"
                color={color}
                hideArrow={true}
                width={"auto"}
                linkRef="/"
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

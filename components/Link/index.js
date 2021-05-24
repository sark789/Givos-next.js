import React, { useContext, useRef, useEffect } from "react";
import { Arrow, LinkContainer, LinkText, StyledLink } from "./LinkElements";
import Link from "next/link";
import { MenuContext } from "../../utils/MenuContext";
import gsap from "gsap";
import { LinkHoverAnimation } from "./LinkAnimations";

const LinkTo = ({ linkRef = "/", forceScrollStop }) => {
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  let containerRef = useRef();
  const timeout = useRef();
  const middleLineRef = useRef();
  const arrowRef = useRef();

  const onClickHandler = () => {
    forceScrollStop(true);
    gsap.set(containerRef, { pointerEvents: "none" });
    timeout.current = setTimeout(() => {
      gsap.set(containerRef, { pointerEvents: "unset" });
    }, 1300);
    setIsMenuOpened({
      ...isMenuOpened,
      isRouteFromMenu: false,
    });
  };

  const handleHover = (e) => {
    LinkHoverAnimation({
      arrowRef: arrowRef.current,
      enter: true,
    });
  };

  const handleHoverExit = (e) => {
    LinkHoverAnimation({
      arrowRef: arrowRef.current,
      enter: false,
    });
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <div style={{ width: "170px" }}>
      <StyledLink
        onClick={onClickHandler}
        ref={(el) => (containerRef = el)}
        onMouseOver={(e) => handleHover(e)}
        onMouseLeave={(e) => handleHoverExit(e)}
      >
        <Link href={linkRef} scroll={false}>
          <LinkContainer>
            <LinkText>Pokaži več</LinkText>
            <span
              ref={arrowRef}
              style={{ display: "flex", pointerEvents: "none" }}
            >
              <Arrow />
            </span>
          </LinkContainer>
        </Link>
      </StyledLink>
    </div>
  );
};

export default LinkTo;

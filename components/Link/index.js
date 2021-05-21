import React, { useContext, useRef, useEffect } from "react";
import { Arrow, LinkContainer, LinkText, StyledLink } from "./LinkElements";
import Link from "next/link";
import { MenuContext } from "../../utils/MenuContext";
import gsap from "gsap";

const LinkTo = ({ linkRef = "/" }) => {
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  let containerRef = useRef();
  const timeout = useRef();

  const onClickHandler = () => {
    gsap.set(containerRef, { pointerEvents: "none" });
    timeout.current = setTimeout(() => {
      gsap.set(containerRef, { pointerEvents: "unset" });
    }, 1300);
    setIsMenuOpened({
      ...isMenuOpened,
      isRouteFromMenu: false,
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
    <StyledLink onClick={onClickHandler} ref={(el) => (containerRef = el)}>
      <Link href={linkRef} scroll={false}>
        <LinkContainer>
          <LinkText>Pokaži več</LinkText>
          <Arrow />
        </LinkContainer>
      </Link>
    </StyledLink>
  );
};

export default LinkTo;

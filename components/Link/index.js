import React, { useContext } from "react";
import { Arrow, LinkContainer, LinkText, StyledLink } from "./LinkElements";
import Link from "next/link";
import { MenuContext } from "../../utils/MenuContext";

const LinkTo = ({ linkRef = "/" }) => {
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  return (
    <Link href={linkRef} scroll={false}>
      <StyledLink
        onClick={() => {
          setIsMenuOpened({
            ...isMenuOpened,
            isRouteFromMenu: false,
          });
        }}
      >
        <LinkContainer>
          <LinkText>Pokaži več</LinkText>
          <Arrow />
        </LinkContainer>
      </StyledLink>
    </Link>
  );
};

export default LinkTo;

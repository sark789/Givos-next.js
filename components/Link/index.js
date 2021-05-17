import React from "react";
import { Arrow, LinkContainer, LinkText, StyledLink } from "./LinkElements";
import Link from "next/link";

const LinkTo = ({ linkRef = "/" }) => {
  return (
    <Link href={linkRef}>
      <StyledLink>
        <LinkContainer>
          <LinkText>Pokaži več</LinkText>
          <Arrow />
        </LinkContainer>
      </StyledLink>
    </Link>
  );
};

export default LinkTo;

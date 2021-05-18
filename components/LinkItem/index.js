import React, { useContext, useRef, useState } from "react";
import { BottomBorder, TopBorder } from "../../styles/commonStyles";
import { onLinkHover } from "./LinkAnimations";
import {
  Arrow,
  LinkItemContainer,
  LinkText,
  StyledLink,
} from "./LinkItemElements";
import { BsArrowRight } from "react-icons/bs";
import { ThemeContext } from "styled-components";
import Link from "next/link";
import useWindowSize from "../../utils/useWindowSize";

const LinkItem = ({
  text,
  color,
  width,
  topBorder = false,
  bottomBorder = false,
  isformenu = false,
  linkAnimationClass = "",
  hideArrow = false,
  linkRef = "",
}) => {
  const middleLineRef = useRef();
  const arrowRef = useRef();
  const themeContext = useContext(ThemeContext);
  const { width: innerWidth } = useWindowSize();

  const handleHover = (e) => {
    onLinkHover({
      arrowRef: arrowRef.current,
      lineRef: middleLineRef.current,
      enter: true,
    });
  };

  const handleHoverExit = (e) => {
    onLinkHover({
      arrowRef: arrowRef.current,
      lineRef: middleLineRef.current,
      enter: false,
    });
  };

  const handleFromMenuClick = (e) => {
    linkRef === "" && e.preventDefault();
    //console.log(isformenu);
    /* if (isformenu) {
      e.preventDefault();
    } */
  };

  return (
    <Link href={linkRef}>
      <StyledLink onClick={handleFromMenuClick}>
        <LinkItemContainer
          color={color}
          isformenu={isformenu}
          onMouseOver={(e) => handleHover(e)}
          onMouseOut={(e) => handleHoverExit(e)}
        >
          <LinkText
            width={width}
            isformenu={isformenu}
            className={linkAnimationClass}
          >
            <span style={{ position: "relative" }}>
              <TopBorder
                ref={middleLineRef}
                noTranslate
                color={color}
                isformenu={isformenu}
                style={{
                  top: "50%",
                  width: 0,
                  height:
                    innerWidth < themeContext.breakpoints.md ? "1px" : "2px",
                }}
              />
              {text}
            </span>
          </LinkText>
          {topBorder && (
            <TopBorder noTranslate color={color} isformenu={isformenu} />
          )}
          {bottomBorder && (
            <BottomBorder noTranslate color={color} isformenu={isformenu} />
          )}
          {!hideArrow && (
            <Arrow
              isformenu={isformenu ? 1 : 0}
              className={linkAnimationClass}
              ref={arrowRef}
            >
              <BsArrowRight />
            </Arrow>
          )}
        </LinkItemContainer>
      </StyledLink>
    </Link>
  );
};

//dummy data
const dummyText = "Title One";

//defaults
LinkItem.defaultProps = {
  text: dummyText,
};

export default LinkItem;

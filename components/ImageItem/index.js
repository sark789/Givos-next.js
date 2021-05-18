import React, { useEffect, useRef, useContext } from "react";
import {
  Image,
  ImageIndex,
  ImageItemContainer,
  ImageOverlayForAnimation,
  ImageTitle,
  ImageTitleContainer,
  ImageWrapper,
} from "./ImageItemElements";
import { TriggeredFadeIn } from "../../commonAnimations/TriggeredFadeIn";
import { ThemeContext } from "styled-components";
import useWindowSize from "../../utils/useWindowSize";
import FadeInOverlay from "../../commonAnimations/FadeInOverlay";

var isInited,
  hasResized = false;

const ImageItem = ({
  image,
  alt,
  title,
  index,
  titleOnTop = true,
  marginBottom = 0,
  fullSize = true,
  animateFadeIn = false,
  setIsPictureLoaded = null,
  isgallery = false,
}) => {
  let prefix = index < 9 ? "0" : "";
  const containerRef = useRef();
  const overlayRef = useRef();
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowSize();

  useEffect(() => {
    isInited = false;
    hasResized = false;
    if (width < themeContext.breakpoints.xl) {
      TriggeredFadeIn({ itemRef: containerRef.current });
      isInited = true;
      if (setIsPictureLoaded !== null) {
        setIsPictureLoaded(true);
      }
    }
  }, []);

  const resizeHandler = () => {
    hasResized = true;
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.addEventListener("resize", resizeHandler);
    };
  }, []);

  const pictureAnim = () => {
    if (width >= themeContext.breakpoints.xl && animateFadeIn) {
      FadeInOverlay({
        itemRef: overlayRef.current,
      });
      setIsPictureLoaded(true);
    }
  };

  return (
    <ImageItemContainer
      ref={containerRef}
      titleOnTop={titleOnTop}
      marginBottom={marginBottom}
    >
      {animateFadeIn && !isInited && !hasResized && (
        <ImageOverlayForAnimation ref={overlayRef} />
      )}
      <ImageWrapper
        fullSize={fullSize}
        style={{ cursor: isgallery && "pointer" }}
      >
        {isgallery ? (
          <a href={image}>
            <Image
              src={image}
              alt={alt}
              onLoad={animateFadeIn !== null && pictureAnim}
            />
          </a>
        ) : (
          <Image
            src={image}
            alt={alt}
            onLoad={animateFadeIn !== null && pictureAnim}
          />
        )}
      </ImageWrapper>
      <ImageTitleContainer>
        <ImageIndex>
          ({prefix}
          {index + 1})
        </ImageIndex>
        <ImageTitle>{title}</ImageTitle>
      </ImageTitleContainer>
    </ImageItemContainer>
  );
};

//dummy data
const dummyImage =
  "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
const dummyAlt = "picture 1";
const dummyTitle = "Title One";
const dummyIndex = "01";

//defaults
ImageItem.defaultProps = {
  image: dummyImage,
  alt: dummyAlt,
  title: dummyTitle,
  index: dummyIndex,
};

export default ImageItem;

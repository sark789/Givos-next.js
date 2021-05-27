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
import gsap from "gsap";
import LazyLoad from "react-lazyload";
/* import Image from "next/image"; */

var hasResized = false;

const ImageItem = ({
  image,
  alt,
  title,
  index,
  titleOnTop = true,
  marginBottom = 0,
  fullSize = true,
  animateFadeIn = false,
  isgallery = false,
}) => {
  let prefix = index < 9 ? "0" : "";
  const containerRef = useRef();
  const overlayRef = useRef();
  const themeContext = useContext(ThemeContext);
  const { width, canAnimate } = useWindowSize();
  const timeout = useRef();
  const observer = useRef();

  const callback = (entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        if (animateFadeIn && width >= themeContext.breakpoints.xl) {
          FadeInOverlay({
            itemRef: overlayRef.current,
            delay: 0,
            duration: 1,
          });
          observer.unobserve(entry.target);
        } else {
          TriggeredFadeIn({ itemRef: containerRef.current });
          observer.unobserve(entry.target);
        }
      }
    });
  };

  useEffect(() => {
    hasResized = false;
    window.addEventListener("resize", resizeHandler);

    if (canAnimate) {
      timeout.current = setTimeout(() => {
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(containerRef.current);
      }, 1200);

      if (width >= themeContext.breakpoints.xl) {
        gsap.set(containerRef.current, {
          visibility: "visible",
        });
      }
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [canAnimate]);

  const resizeHandler = () => {
    hasResized = true;
    gsap.set(containerRef.current, {
      visibility: "visible",
    });
    window.removeEventListener("resize", resizeHandler);
  };

  return (
    <ImageItemContainer
      ref={containerRef}
      titleOnTop={titleOnTop}
      marginBottom={marginBottom}
      visibility={hasResized ? "visible" : "hidden"}
    >
      {animateFadeIn && width >= themeContext.breakpoints.xl && !hasResized && (
        <ImageOverlayForAnimation ref={overlayRef} />
      )}
      <ImageWrapper
        fullSize={fullSize}
        style={{ cursor: isgallery && "pointer" }}
      >
        {isgallery ? (
          <a href={image}>
            <LazyLoad offset={1200} once>
              <Image src={image} alt={alt} />
            </LazyLoad>
          </a>
        ) : (
          <Image src={image} alt={alt} />
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

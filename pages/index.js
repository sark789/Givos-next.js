import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import _ from "lodash";
import { ThemeContext } from "styled-components";
import {
  HeroContainer,
  Image,
  ImageContainer,
} from "../styles/pages/hero/HeroElements";
import PictureOverlay from "../components/PictureOverlay/index";
import Title from "../components/Title/index";
import FadeIn from "../commonAnimations/FadeIn/index";
import TitleAnimation from "../components/Title/TitleAnimation";
import ScaleIn from "../commonAnimations/ScaleIn";
import SliderMenu from "../components/SliderMenu";
import UnderlineAnimation from "../components/Underline/UnderlineAnimations";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Copyright from "../components/Copyright";
import { WideContainer } from "../styles/commonStyles";
import Navbar from "../components/Navbar";
import isTouchDevice from "../utils/isTouchDevice";
import useWindowSize from "../utils/useWindowSize";
import {
  heroImages,
  heroImageAlts,
  heroTitles,
  productLinks as links,
} from "../public/data/data";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

var canScroll = false;
var scrollDirection = "bottom";
var inited = false;
var lastTouchMove = 0;
var tlScroll;

const Hero = ({
  images = heroImages,
  alts = heroImageAlts,
  titles = heroTitles,
  productLinks = links,
}) => {
  const containerRefs = useRef([]);
  const startTimeout = useRef(null);
  const timeout = useRef(null);
  const callbackTimeout = useRef();
  containerRefs.current = [];
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowSize();
  const [prevWidth, setPrevWidth] = useState(width);

  function isLargeDisplay() {
    if (width) {
      return isTouchDevice();
    }
  }

  const addToRefs = (el) => {
    if (el && !containerRefs.current.includes()) {
      containerRefs.current.push(el);
    }
  };

  const [containerIndex, setContainerIndex] = useState(1);
  let mobileStartArray = [];
  images.map((image, index) => mobileStartArray.push(index));
  let startArray =
    width >= themeContext.breakpoints.md
      ? [0, 1, 2]
      : [...mobileStartArray.slice(1), 0];

  const [reconstructedImageArray, setReconstructedImageArray] =
    useState(startArray);

  function reconstructedArrayScroll() {
    let array = [];
    if (containerIndex === images.length - 1) {
      array = [images.length - 2, images.length - 1, 0];
    } else if (containerIndex === 0) {
      array = [images.length - 1, 0, 1];
    } else {
      array = [containerIndex - 1, containerIndex, containerIndex + 1];
    }

    setReconstructedImageArray(array);
  }

  //reconstruct array at the moment user clicks a certain title on slider menu
  function reconstructedArrayClick(indexClicked) {
    if (containerIndex !== indexClicked && canScroll) {
      canScroll = false;

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      let array = [];

      array = [parseInt(indexClicked), containerIndex, parseInt(indexClicked)];

      setReconstructedImageArray(array);
      setContainerIndex(parseInt(indexClicked));
    }
  }

  function canScrollCallback() {
    reconstructedArrayScroll();
    canScroll = true;
  }

  function onScrollCompleteCallback() {
    callbackTimeout.current = setTimeout(() => {
      //moves the view to center
      gsap.set(window, {
        scrollTo: window.innerHeight,
        duration: 0,
        onComplete: canScrollCallback,
      });
    }, 250);
  }

  function startTimer() {
    timeout.current = setTimeout(() => {
      canScroll = false;
      scrollDirection = "bottom";
      setContainerIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 8000);
  }

  function clearTimer() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  const onWheelHandler = (e) => {
    e.preventDefault();
    if (canScroll) {
      canScroll = false;
      if (e.deltaY > 0) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        scrollDirection = "bottom";
        setContainerIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      } else {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        scrollDirection = "top";
        setContainerIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }
  };

  const onTouchHandler = (e) => {
    var currentTouchMove = e.touches[0].clientY;
    e.preventDefault();
    if (canScroll) {
      canScroll = false;
      if (lastTouchMove > currentTouchMove) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        scrollDirection = "bottom";
        setContainerIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      } else {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        scrollDirection = "top";
        setContainerIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
    }
  };

  //on item click
  const onItemClickHandler = (e) => {
    let passVal;
    scrollDirection =
      containerIndex > parseInt(e.target.dataset.key) + 1 ? "top" : "bottom";
    passVal =
      parseInt(e.target.dataset.key) === images.length - 1
        ? 0
        : parseInt(e.target.dataset.key) + 1;

    reconstructedArrayClick(passVal);
  };

  //reisze handler
  const onResizeHandler = () => {
    if (!isTouchDevice()) {
      gsap.set(window, {
        scrollTo: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    if (
      prevWidth < themeContext.breakpoints.xl &&
      width >= themeContext.breakpoints.xl
    ) {
      window.location.reload();
    } else if (
      prevWidth >= themeContext.breakpoints.xl &&
      width < themeContext.breakpoints.xl
    ) {
      window.location.reload();
    }
    setPrevWidth(width);
  }, [width]);

  //if tab is changed stop the timer. reset the timer when its active again
  const onActiveTabHandler = () => {
    if (document.visibilityState === "hidden") {
      clearTimer();
    }
    if (document.visibilityState === "visible") {
      startTimer();
    }
  };

  //init animation
  useLayoutEffect(() => {
    inited = false;
    canScroll = false;
    FadeIn(".image-animation");

    startTimeout.current = setTimeout(() => {
      canScroll = true;
    }, 2700);
    return () => {
      if (startTimeout.current) {
        clearTimeout(startTimeout.current);
      }
    };
  }, []);

  //useEffect for scroll

  useEffect(() => {
    if (!isTouchDevice() && inited) {
      TitleAnimation(
        `.animation1-${containerIndex}`,
        `.animation2-${containerIndex}`,
        `.animation3-${containerIndex}`,
        0.4,
        1.2
      );

      UnderlineAnimation({
        underlineRef: `.underline-animation-${containerIndex}`,
        startDelay: 0.4,
        duration: 1.2,
      });

      ScaleIn(`.scale-in-${containerIndex}`, 0.2, 1.4);

      tlScroll.to(window, {
        scrollTo: scrollDirection === "top" ? 0 : window.innerHeight * 2,
        duration: 2,
        id: "hero-scroll",
        ease: "power2.out",
        onComplete: onScrollCompleteCallback,
      });
    }
    inited = true;
  }, [containerIndex]);

  useEffect(() => {
    tlScroll = gsap.timeline();
    if (!isTouchDevice()) {
      setReconstructedImageArray([0, 1, 2]);

      window.addEventListener(
        "touchstart",
        (e) => (lastTouchMove = e.touches[0].clientY)
      );
      //prevent normal wheel scroll and set a listener on scroll
      window.addEventListener("wheel", onWheelHandler, {
        passive: false,
      });
      window.addEventListener("touchmove", onTouchHandler, {
        passive: false,
      });
      document.addEventListener("visibilitychange", onActiveTabHandler);
      window.addEventListener("resize", onResizeHandler);
      return () => {
        window.removeEventListener("wheel", onWheelHandler);
        window.removeEventListener("touchmove", onTouchHandler);
        document.removeEventListener("visibilitychange", onActiveTabHandler);
        window.removeEventListener("resize", onResizeHandler);
        document.removeEventListener("resize", onResizeHandler);

        //var killScroll = gsap.getById("hero-scroll");
        if (tlScroll !== undefined) {
          tlScroll.kill();
        }

        if (callbackTimeout.current) {
          clearTimeout(callbackTimeout.current);
        }
      };
    } else {
      setReconstructedImageArray([...mobileStartArray.slice(1), 0]);
    }
  }, []);

  //autoscroll
  useEffect(() => {
    if (!isTouchDevice()) {
      timeout.current = setTimeout(() => {
        canScroll = false;
        scrollDirection = "bottom";
        setContainerIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 8000);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [containerIndex]);

  return (
    <div style={{ position: "absolute", backgroundColor: "white" }}>
      <Navbar
        isForHeroPage
        background={isLargeDisplay() ? "white" : "transparent"}
        color={isLargeDisplay() ? "black" : "white"}
      />
      <HeroContainer isDesktop={!isLargeDisplay()} className="hero-container">
        {reconstructedImageArray.map((imageIndex, index) => (
          <ImageContainer
            key={images[index]}
            ref={addToRefs}
            isDesktop={!isLargeDisplay()}
          >
            <PictureOverlay
              className={`image-animation scale-in-${imageIndex}`}
            />
            <Image
              src={images[imageIndex]}
              alt={alts && alts[imageIndex]}
              className={`image-animation scale-in-${imageIndex}`}
            />
            <Title
              titles={titles}
              index={imageIndex}
              linkRef={productLinks}
            ></Title>
          </ImageContainer>
        ))}
      </HeroContainer>
      {!isLargeDisplay() ? (
        <SliderMenu
          titles={titles}
          currentIndex={containerIndex}
          onItemClick={onItemClickHandler}
        />
      ) : (
        <WideContainer>
          <Copyright />
        </WideContainer>
      )}
    </div>
  );
};

/* //dummy data
const dummyImages = [
  "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1616699343865-1b6be5ca0db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1616604745302-60a195c7061a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80",
  "https://images.unsplash.com/photo-1616263291353-0a89a385ea17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
];
const dummyAlts = ["picture 1", "picture 2", "picture 3", "picture 4"];
const dummyTitles = ["Title One", "Title Two", "Title Three", "Title Four"];

//defaults
Hero.defaultProps = {
  images: dummyImages,
  alts: dummyAlts,
  titles: dummyTitles,
}; */

export default Hero;

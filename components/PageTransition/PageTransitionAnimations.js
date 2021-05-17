import gsap from "gsap";
import isTouchDevice from "../../utils/isTouchDevice";

export const PageTransitionEnter = ({ location, containerRef }) => {
  gsap
    .timeline()
    .set(document.body, {
      overflow: "hidden",
      touchAction: "none",
      msTouchAction: "none",
    })
    .set(containerRef, {
      display: "block",
    })
    .fromTo(
      containerRef,
      { top: window.pageYOffset + window.innerHeight },
      {
        ease: "expo.inOut",
        duration: 1,
        top: window.pageYOffset,
      }
    )
    .set(window, {
      scrollTo: location !== "/" || isTouchDevice() ? 0 : window.innerHeight,
    })
    .set(containerRef, {
      top: location !== "/" || isTouchDevice() ? 0 : window.innerHeight,
    })
    .fromTo(
      containerRef,
      { top: location !== "/" || isTouchDevice() ? 0 : window.innerHeight },
      {
        ease: "expo.inOut",
        duration: 1,
        top: -window.innerHeight,
      }
    )
    .set(containerRef, { display: "none" })
    .set(document.body, {
      overflow: "unset",
      touchAction: "unset",
      msTouchAction: "unset",
    });
};

export const PageTransitionExit = (node) => {
  gsap.set(node, { zIndex: 100 });
};

import gsap from "gsap";
import isTouchDevice from "../../utils/isTouchDevice";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);

export const PageTransitionEnter = ({
  location,
  containerRef,
  isRouteFromMenu,
}) => {
  var easePosition =
    location !== "/" || isTouchDevice() ? 0 : window.innerHeight;
  var easeOutPosition =
    location === "/" && !isTouchDevice() ? 0 : -window.innerHeight;

  if (!isRouteFromMenu) {
    gsap
      .timeline()
      .set(document.body, {
        overflow: "hidden",
        touchAction: "none",
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
        scrollTo: easePosition,
      })
      .set(containerRef, {
        top: easePosition,
      })
      .fromTo(
        containerRef,
        {
          top: easePosition,
        },
        {
          ease: "expo.inOut",
          duration: 1,
          top: isTouchDevice()
            ? easeOutPosition - window.innerHeight * 0.2
            : easeOutPosition,
        }
      )
      .set(containerRef, { display: "none" })
      .set(document.body, {
        overflow: "unset",
        touchAction: "unset",
      });
  } else {
    gsap.set(window, {
      scrollTo: easePosition,
    });
  }
};

export const PageTransitionExiting = ({ node, isRouteFromMenu }) => {
  if (!isRouteFromMenu) {
    gsap.set(node, { zIndex: 100 });
  }
};

export const PageTransitionExit = ({ location }) => {};

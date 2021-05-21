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
          top: isTouchDevice()
            ? -window.innerHeight - window.innerHeight * 0.2
            : -window.innerHeight,
        }
      )
      .set(containerRef, { display: "none" })
      .set(document.body, {
        overflow: "unset",
        touchAction: "unset",
      });
  } else {
    gsap.set(window, {
      scrollTo: location !== "/" || isTouchDevice() ? 0 : window.innerHeight,
    });
  }
};

export const PageTransitionExiting = ({ node, isRouteFromMenu }) => {
  if (!isRouteFromMenu) {
    gsap.set(node, { zIndex: 100 });
  }
};

export const PageTransitionExit = () => {
  /*  ScrollTrigger.getAll().forEach((i) => i.kill()); */
  /* var heroAnim = gsap.getById("hero-scroll");
  if (heroAnim) {
    heroAnim.pause();
  } */
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeInOverlay from "../../commonAnimations/FadeInOverlay";
import { TriggeredFadeIn } from "../../commonAnimations/TriggeredFadeIn";

const ImageItemAnimation = ({
  containerRef,
  overlayRef,
  animateFadeIn = false,
}) => {
  /* ScrollTrigger.saveStyles(containerRef, overlayRef); */

  ScrollTrigger.matchMedia({
    "(max-width: 1199px)": function () {
      gsap.set(overlayRef, { height: 0 });
      TriggeredFadeIn({ itemRef: containerRef });
    },
    "(min-width: 1200px)": function () {
      gsap.set(".image-item-container", {
        visibility: "visible",
        y: 0,
      });
      FadeInOverlay({
        itemRef: overlayRef,
        delay: 0.6,
      });
    },
  });
};

export default ImageItemAnimation;

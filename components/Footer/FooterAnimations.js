import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const FooterFadeIn = ({ itemRef, containerRef }) => {
  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: itemRef,
      start: () => `top+=${containerRef.offsetHeight} bottom`,
      end: () => `+=${containerRef.offsetHeight}`,
      scrub: true,
      invalidateOnRefresh: true,
      id: "footer-fade-in",
    },
  });

  tl.fromTo(
    itemRef,
    {
      y: () => -containerRef.offsetHeight,
    },
    {
      y: 0,
    }
  );
};

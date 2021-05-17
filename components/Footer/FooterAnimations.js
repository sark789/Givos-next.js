import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const FooterFadeIn = ({ itemRef, containerRef }) => {
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

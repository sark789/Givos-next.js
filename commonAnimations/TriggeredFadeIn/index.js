import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TriggeredFadeIn = ({
  itemRef,
  triggerOffset = 0,
  distance = 100,
  duration = 1,
  delay = 0,
}) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: itemRef,
      start: `top+=${triggerOffset} bottom`,
    },
  });

  tl.fromTo(
    itemRef,
    {
      y: distance,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      delay: delay,
      ease: "power2.out",
      duration: duration,
    }
  );
};

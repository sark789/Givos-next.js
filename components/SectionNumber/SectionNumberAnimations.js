import gsap from "gsap";
import FadeIn from "../../commonAnimations/FadeIn";
import isTouchDevice from "../../utils/isTouchDevice";

export const SectionNumberTriggerAnimation = ({
  lineRef,
  startDelay = 0,
  duration = 1.8,
  triggerOffset = 0,
  vertical = false,
  num1Ref,
  num2Ref,
}) => {
  if (isTouchDevice()) {
    triggerOffset = triggerOffset / 2;
  }

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: lineRef,
      start: `top+=${triggerOffset} bottom`,
    },
  });

  tl.fromTo(
    lineRef,
    {
      height: vertical ? 0 : 1,
      width: vertical ? 1 : 0,
    },
    {
      height: vertical ? 26 : 1,
      width: vertical ? 1 : 26,
      delay: startDelay,
      ease: "expo.inOut",
      duration: duration,
    }
  )
    .add(FadeIn(num1Ref, 0, 0, 1.4), 0.4)
    .add(FadeIn(num2Ref, 0, 0, 1.4), 0.6);
};

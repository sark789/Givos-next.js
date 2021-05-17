import gsap from "gsap";

const BorderAnimation = ({
  lineRef,
  stagger = 0,
  delay = 0.2,
  duration = 1,
  isVertical = false,
}) => {
  gsap.fromTo(
    lineRef,
    {
      width: !isVertical && 0,
      height: isVertical && 0,
    },
    {
      width: !isVertical && "100%",
      height: isVertical && "100%",
      delay: delay,
      ease: "power2.out",
      duration: duration,
      stagger: {
        amount: stagger,
      },
    }
  );
};

export default BorderAnimation;

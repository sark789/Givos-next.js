import gsap from "gsap";

const UnderlineAnimation = ({
  underlineRef,
  startDelay = 0.8,
  duration = 1.6,
  underlineWidth = "100%",
}) => {
  var tl = gsap.timeline({
    defaults: { duration: duration, ease: "power2.out" },
  });
  tl.fromTo(
    underlineRef,
    {
      width: 0,
    },
    {
      width: underlineWidth,
      delay: startDelay,
    }
  );
};

export default UnderlineAnimation;

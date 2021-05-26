import gsap from "gsap";

const FadeInOverlay = ({
  itemRef,
  delay = 0.2,
  duration = 1.8,
  ease = "expo.inOut",
}) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: itemRef,
        start: `top-=100 bottom`,
      },
    })
    .fromTo(
      itemRef,
      {
        scaleY: 1,
        transformOrigin: "50% 0%",
      },
      {
        scaleY: 0,
        duration: duration,
        delay: delay,
        ease: ease,
      }
    );
};

export default FadeInOverlay;

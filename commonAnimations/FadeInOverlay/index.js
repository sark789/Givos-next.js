import gsap from "gsap/dist/gsap";

const FadeInOverlay = ({
  itemRef,
  delay = 0.2,
  duration = 1.8,
  ease = "expo.inOut",
}) => {
  gsap.fromTo(
    itemRef,
    {
      height: "100%",
    },
    {
      height: 0,
      duration: duration,
      delay: delay,
      ease: ease,
    }
  );
};

export default FadeInOverlay;

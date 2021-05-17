import gsap from "gsap";

const FadeInWithOpacity = ({
  itemRef,
  delay = 0.2,
  duration = 1.8,
  ease = "expo.inOut",
}) => {
  gsap.fromTo(
    itemRef,
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: ease,
    }
  );
};

export default FadeInWithOpacity;

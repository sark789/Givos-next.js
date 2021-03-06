import gsap from "gsap";

const FadeIn = (
  itemRef,
  stagger = 0,
  delay = 0.8,
  duration = 1.8,
  ease = "expo.inOut",
  onCompleteCallback = () => {}
) => {
  var tl = gsap.fromTo(
    itemRef,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      duration: duration,
      delay: delay,
      ease: ease,
      stagger: {
        amount: stagger,
      },
      onComplete: onCompleteCallback,
    }
  );

  return tl;
};

export default FadeIn;

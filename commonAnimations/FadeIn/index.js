import gsap from "gsap";

const FadeIn = (
  itemRef,
  stagger = 0,
  delay = 0.2,
  duration = 1.8,
  ease = "expo.inOut"
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
    }
  );

  return tl;
};

export default FadeIn;

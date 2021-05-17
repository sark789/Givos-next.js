import gsap from "gsap";

const ScaleIn = (itemRef, startDelay = 0.2, duration = 1.4) => {
  gsap.fromTo(
    itemRef,
    {
      scale: 1.45,
    },
    {
      duration: duration,
      ease: "power2.out",
      scale: 1,
      delay: startDelay,
    }
  );
};

export default ScaleIn;

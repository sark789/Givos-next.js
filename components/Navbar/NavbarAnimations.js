import gsap from "gsap";

export const InitialNavbarAnimation = ({
  lineRef,
  linkRef,
  isForHeroPage,
  delay = 1.4,
}) => {
  if (!isForHeroPage) {
    gsap.fromTo(
      lineRef,
      {
        width: 0,
      },
      { width: "100%", delay: 1, ease: "power2.out", duration: 1.2 }
    );
  }

  gsap.fromTo(
    linkRef,
    {
      y: -100,
    },
    {
      y: 0,
      delay: delay,
      duration: 0.8,
      ease: "power2.out",
    }
  );
};

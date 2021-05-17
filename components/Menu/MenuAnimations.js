import gsap from "gsap";

export const MenuAnimation = ({
  containerRef,
  isMenuOpened,
  links,
  infoRef,
  navbarRef,
  onComplete,
}) => {
  var tl = gsap.timeline({
    paused: true,
    onComplete: onComplete,
    onReverseComplete: onComplete,
  });
  tl.clear();
  tl.fromTo(
    containerRef,
    {
      height: 0,
    },
    {
      height: "100vh",
      duration: 1,
      ease: "power3.out",
      onReverseComplete: () => {
        gsap.set(containerRef, {
          display: "none",
        });
      },
    }
  ).fromTo(
    links,
    {
      yPercent: 200,
    },
    {
      yPercent: 0,
      stagger: {
        amount: 0.9,
      },
    },
    "-=1.2"
  );
  if (infoRef.current !== null) {
    tl.add(
      gsap.fromTo(
        infoRef,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      ),
      "-=.3"
    );
  }
  tl.add(gsap.fromTo(navbarRef, { yPercent: -100 }, { yPercent: 0 }), "-=.8");

  if (!isMenuOpened) {
    gsap.set(containerRef, {
      display: "block",
    });
    tl.play();
  } else {
    tl.reverse(0);
  }
};

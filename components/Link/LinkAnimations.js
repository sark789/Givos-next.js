import gsap from "gsap";

export const LinkHoverAnimation = ({ arrowRef, enter }) => {
  var tl = gsap.timeline();
  tl.clear();

  tl.fromTo(
    arrowRef,
    {
      x: 0,
    },
    { x: 10, duration: 0.3, ease: "power2.out" }
  );

  if (enter) {
    tl.play();
  } else {
    tl.reverse(0);
  }
};

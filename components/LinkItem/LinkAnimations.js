import gsap from "gsap";

export const onLinkHover = ({ arrowRef = null, lineRef, enter }) => {
  var tl = gsap.timeline({
    defaults: { duration: 0.3, ease: "power2.out" },
    paused: true,
  });
  tl.clear();

  tl.fromTo(
    lineRef,
    {
      width: 0,
    },
    {
      width: "100%",
    },
    "<="
  );
  if (arrowRef !== null) {
    tl.add(
      gsap.fromTo(
        arrowRef,
        {
          x: 0,
        },
        {
          x: 10,
        }
      ),
      "<="
    );
  }

  if (enter) {
    tl.play();
  } else {
    tl.reverse(0);
  }
};

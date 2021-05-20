import gsap from "gsap";

const TitleAnimation = (
  item1Ref,
  item2Ref,
  item3Ref,
  startDelay = 1,
  duration = 1.25
) => {
  var tl = gsap.timeline({
    defaults: { duration: duration, ease: "power2.out" },
  });
  tl.fromTo(
    item1Ref,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      delay: startDelay,
    }
  )
    .fromTo(
      item2Ref,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        delay: 0.2,
      },
      "<="
    )
    .fromTo(
      item3Ref,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
      },
      "<="
    );
};

export const UnderlineAnimation = ({
  underlineRef,
  startDelay = 0.8,
  duration = 1.6,
  underlineWidth = "100%",
}) => {
  var tl = gsap.timeline({
    defaults: { duration: duration, ease: "power2.out" },
  });
  tl.fromTo(
    underlineRef,
    {
      width: 0,
    },
    {
      width: underlineWidth,
      delay: startDelay,
    }
  );
};

export default TitleAnimation;

import gsap from "gsap";

const FormPlaceholderAnimation = ({ itemRef, textRef, reverse = false }) => {
  var tl = gsap
    .timeline({
      paused: true,
      defaults: { duration: 0.2, ease: "power4.inOut" },
    })
    .fromTo(
      itemRef,
      {
        y: 0,
      },
      {
        y: -20,
      }
    )
    .fromTo(
      textRef,
      {
        fontSize: window.innerWidth < 768 ? "1rem" : "1.125rem",
      },
      {
        fontSize: "0.875rem",
        delay: -0.2,
      }
    );

  if (!reverse) {
    tl.play();
  } else {
    tl.reverse(0);
  }
};

export default FormPlaceholderAnimation;

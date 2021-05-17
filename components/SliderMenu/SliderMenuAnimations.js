import gsap from "gsap";

export const ChangeColor = (itemRef, reverse = false) => {
  if (!reverse) {
    gsap.fromTo(
      itemRef,
      {
        color: "rgba(255, 255, 255, 0.6)",
      },
      {
        color: "white",
        duration: 1.4,
      }
    );
  } else {
    gsap.fromTo(
      itemRef,
      {
        color: "white",
      },
      {
        color: "rgba(255, 255, 255, 0.6)",
        duration: 1.4,
      }
    );
  }
};

export const DrawBullet = (itemRef, reverse = false, firstTime = false) => {
  if (!reverse) {
    gsap.fromTo(
      itemRef,
      {
        width: 0,
        marginRight: 0,
      },
      {
        width: 27,
        delay: firstTime ? 1 : 0.2,
        marginRight: "10px",
        duration: 1.4,
        ease: "expo.inOut",
      }
    );
  } else {
    gsap.fromTo(
      itemRef,
      {
        marginRight: "10px",
        width: 27,
      },
      {
        marginRight: 0,
        width: 0,
        duration: 1.4,
        ease: "expo.inOut",
      }
    );
  }
};

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxPictureAnimation({ movementSpeed = 2000 }) {
  var position =
    document.getElementsByClassName("description-inner-container")[0]
      .offsetHeight -
    document.getElementsByClassName("description-pin")[0].offsetHeight;

  console.log(position);

  gsap.fromTo(
    ".gallery-parallax-animation",
    { y: 0 },
    {
      y: -movementSpeed + position / 2 + 8,
      ease: "none",
      id: "gallery-parallax-animation",
      scrollTrigger: {
        trigger: ".description-pin",
        start: "bottom bottom",
        end: `bottom+=${movementSpeed} bottom`,
        scrub: true,
        invalidateOnRefresh: true,
        id: "gallery-parallax-animation-trigger",
      },
    }
  );
}

export function PinText({ movementSpeed = 2000 }) {
  ScrollTrigger.create({
    trigger: ".description-pin",
    start: "bottom bottom",
    end: `bottom+=${movementSpeed} bottom`,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true,
    id: "description-pin-trigger",
  });
}

export function KillProductAnimations() {
  var tl = gsap.getById("gallery-parallax-animation");
  var tlTrig = ScrollTrigger.getById("gallery-parallax-animation-trigger");

  var tl2Trig = ScrollTrigger.getById("description-pin-trigger");
  if (tl2Trig) {
    tl2Trig.kill();
  }

  if (tlTrig) {
    tlTrig.kill();
  }

  /* if (tl) {
    tl.kill();
  } */
}

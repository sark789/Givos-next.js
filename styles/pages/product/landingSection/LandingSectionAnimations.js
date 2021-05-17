import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LandingSectionPinAnimation({ layerRef, imageRef, height }) {
  var trig1 = ScrollTrigger.getById("pin-landing-pic");
  if (trig1) {
    trig1.kill();
  }
  var trig2 = ScrollTrigger.getById("pin-landing-scale");
  if (trig2) {
    trig2.kill();
  }
  var anim = gsap.getById("landing-pic-height");
  if (anim) {
    anim.kill();
  }

  var anim2 = gsap.getById("pin-landing-scale-animation");
  if (anim2) {
    anim2.kill();
  }

  gsap.set(layerRef, {
    height: height,
  });
  gsap.to(layerRef, {
    id: "landing-pic-height",
    scrollTrigger: {
      trigger: layerRef,
      invalidateOnRefresh: true,
      start: "top top",
      pin: true,
      pinSpacing: false,
      id: "pin-landing-pic",
    },
  });

  gsap.fromTo(
    imageRef,
    { scale: 1 },
    {
      scale: 1.2,
      id: "pin-landing-scale-animation",
      scrollTrigger: {
        trigger: layerRef,
        start: "top top",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        scrub: true,
        id: "pin-landing-scale",
      },
    }
  );
}

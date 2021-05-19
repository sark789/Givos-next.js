import React, { useRef, useEffect } from "react";
import {
  Bullet,
  SlideItemContainer,
  SlideItemText,
  SliderMenuContainer,
} from "./SliderMenuElements";
import FadeIn from "../../commonAnimations/FadeIn/index";
import { ChangeColor, DrawBullet } from "./SliderMenuAnimations";
import gsap from "gsap";

var animatingFirstTime = true;

const SliderMenu = ({ titles, currentIndex, onItemClick }) => {
  const containerRef = useRef();
  const containerRefs = useRef([]);
  containerRefs.current = [];
  const bulletRefs = useRef([]);
  bulletRefs.current = [];
  var rearangedTitles = titles.slice(1, titles.length).concat(titles[0]);

  const addToRefs = (el) => {
    if (el && !containerRefs.current.includes()) {
      containerRefs.current.push(el);
    }
  };

  const addToBulletRefs = (el) => {
    if (el && !bulletRefs.current.includes()) {
      bulletRefs.current.push(el);
    }
  };

  //shift current index for 1
  if (currentIndex === 0) {
    currentIndex = titles.length - 1;
  } else {
    currentIndex -= 1;
  }

  //previous index
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevIndex = usePrevious(currentIndex);

  useEffect(() => {
    ChangeColor(containerRefs.current[currentIndex]);
    DrawBullet(bulletRefs.current[currentIndex], false, animatingFirstTime);
    animatingFirstTime = false;
    if (prevIndex !== undefined) {
      DrawBullet(bulletRefs.current[prevIndex], true);
      ChangeColor(containerRefs.current[prevIndex], true);
    }
  }, [currentIndex]);

  //init animation
  useEffect(() => {
    gsap.set(containerRef.current, {
      visibility: "visible",
    });
    FadeIn(containerRefs.current, 0.4);
  }, []);

  return (
    <SliderMenuContainer className="cont" ref={containerRef}>
      {rearangedTitles.map((title, index) => (
        <SlideItemContainer key={index}>
          <>
            <Bullet
              ref={addToBulletRefs}
              display={currentIndex === index ? "flex" : "hidden"}
            />
            <SlideItemText
              ref={addToRefs}
              onClick={onItemClick}
              data-key={index}
            >
              {title}
            </SlideItemText>
          </>
        </SlideItemContainer>
      ))}
    </SliderMenuContainer>
  );
};

export default SliderMenu;

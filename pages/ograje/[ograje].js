import React, { useContext, useEffect, useRef, useState } from "react";
import DescriptionSection from "../../styles/pages/product/DescriptionSection";
import LandingSection from "../../styles/pages/product/landingSection";
import {
  heroImages,
  heroImageAlts,
  heroTitles,
  productMainDescription,
  productTextArray,
  productSubtitleArray,
  productSubtitleArray2,
  productImages,
  productImageTitles,
  galleryLinks,
} from "../../public/data/data";
import GallerySection from "../../styles/pages/product/gallerySection";
import ContactSection from "../../styles/pages/product/contactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WideContainer } from "../../styles/commonStyles";
import { DescriptionAndGalleryWrapper } from "../../styles/pages/product/ProductElements";
import Footer from "../../components/Footer";
import {
  KillProductAnimations,
  ParallaxPictureAnimation,
  PinText,
} from "../../styles/pages/product/ProductAnimations";
import { ThemeContext } from "styled-components";
import useWindowSize from "../../utils/useWindowSize";
import _ from "lodash";
import Navbar from "../../components/Navbar";
import isTouchDevice from "../../utils/isTouchDevice";
import { productLinks } from "../../public/data/data";

export async function getStaticPaths() {
  const paths = productLinks.map((link) => ({
    params: { ograje: link.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const ograje = context.params.ograje;
  let index = context.params.index;

  productLinks.map((link) => {
    if (link === ograje) {
      index = productLinks.indexOf(link);
    }
  });

  return {
    props: { ograje: ograje, index: index, key: index },
  };
}

var pinMargin = 2000;

const Product = ({ index = 0 }) => {
  const containerRef = useRef();
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowSize();

  const [startpoint, setStartpoint] = useState("0px");
  const [galleryHeight, setGalleryHeight] = useState("fit-content");
  const [prevWidth, setPrevWidth] = useState(width);

  const onResizeHandler = () => {
    if (!isTouchDevice()) {
      setGalleryHeight(
        document.getElementsByClassName("gallery-inner-wrapper")[0].offsetHeight
      );

      KillProductAnimations();
      setAnimations();
    }
  };

  const setAnimations = () => {
    if (window.innerWidth >= themeContext.breakpoints.xl) {
      ParallaxPictureAnimation({
        movementSpeed: pinMargin,
      });
      PinText({});
    }
  };

  useEffect(() => {
    KillProductAnimations();
    setAnimations();
  }, [galleryHeight]);

  useEffect(() => {
    setPrevWidth(width);
    if (prevWidth < 1200 && width >= 1200) {
      KillProductAnimations();
      setAnimations();
    } else if (prevWidth >= 1200 && width < 1200) {
      KillProductAnimations();
    }
  }, [width]);

  useEffect(() => {
    gsap.set(containerRef.current, {
      visibility: "visible",
    });
    onResizeHandler();
    let debouncedFunction = _.debounce(onResizeHandler, 700);
    window.addEventListener("resize", debouncedFunction);
    return () => {
      debouncedFunction.cancel();
      window.removeEventListener("resize", debouncedFunction);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        position: "absolute",
      }}
    >
      <Navbar />
      <LandingSection
        image={heroImages[index]}
        alt={heroImageAlts[index]}
        title={heroTitles[index]}
      />
      <WideContainer background={themeContext.colors.dark}>
        <DescriptionAndGalleryWrapper ref={containerRef}>
          <DescriptionSection
            mainDescription={productMainDescription[index]}
            textArray={productTextArray[index]}
            subtitleArray={productSubtitleArray[index]}
            subtitleArray2={productSubtitleArray2[index]}
            setStartpoint={setStartpoint}
          />

          <GallerySection
            images={productImages[index]}
            titles={productImageTitles[index]}
            alts={productImageTitles[index]}
            startpoint={`${startpoint}px`}
            galleryLinks={galleryLinks[index]}
          />
        </DescriptionAndGalleryWrapper>
      </WideContainer>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Product;

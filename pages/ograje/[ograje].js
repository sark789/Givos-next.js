import React, { useContext, useEffect, useState } from "react";
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
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WideContainer } from "../../styles/commonStyles";
import { DescriptionAndGalleryWrapper } from "../../styles/pages/product/ProductElements";
import Footer from "../../components/Footer";
import {
  KillProductAnimations,
  ParallaxPictureAnimation,
  PinText,
} from "../../styles/pages/product/ProductAnimations";
import { ThemeContext } from "styled-components";
import { useWindowSize } from "react-use";
import _ from "lodash";
import Navbar from "../../components/Navbar";
import isTouchDevice from "../../utils/isTouchDevice";
import { productLinks } from "../../public/data/data";

gsap.registerPlugin(ScrollTrigger);

var pinMargin = 2000;

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
    props: { ograje: ograje, index: index },
  };
}

const Product = ({ index = 0 }) => {
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
    }

    KillProductAnimations();
    setAnimations();
  };

  function setAnimations() {
    if (width >= themeContext.breakpoints.xl) {
      ParallaxPictureAnimation({
        movementSpeed: pinMargin,
      });
      PinText({});
    }
  }

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
        <DescriptionAndGalleryWrapper
          pinSpace={
            width >= themeContext.breakpoints.xl ? `${pinMargin}px` : "0px"
          }
        >
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

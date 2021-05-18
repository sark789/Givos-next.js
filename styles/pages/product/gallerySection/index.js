import React, { useContext, useEffect, useRef } from "react";
import ImageItem from "../../../../components/ImageItem";
import LinkItem from "../../../../components/LinkItem";
import SectionNumber from "../../../../components/SectionNumber";
import {
  BottomBorder,
  InnerContainerWithLargePadding,
  InnerContainerWithMediumPadding,
  TopBorder,
  RightBorder,
} from "../../../../styles/commonStyles";
import {
  GalleryInnerWrapper,
  GallerySectionWrapper,
  GalleryTextWrapper,
  LinkAndSectionNumberContainer,
  LinkItemContainer,
  SectionNumberContainer,
  Span,
} from "./GallerySectionElements";
import { ThemeContext } from "styled-components";
import isTouchDevice from "../../../../utils/isTouchDevice";
import useWindowSize from "../../../../utils/useWindowSize";

var titleImageOnTop = true;

const GallerySection = ({ images, alts, titles, startpoint, galleryLinks }) => {
  const containerRef = useRef();
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowSize();

  useEffect(() => {
    titleImageOnTop = width >= themeContext.breakpoints.xl ? true : false;
  }, [width]);

  return (
    <GallerySectionWrapper
      ref={containerRef}
      className="gallery-parallax-animation"
      startpoint={startpoint}
      width={width}
    >
      <InnerContainerWithLargePadding isVertical>
        <GalleryInnerWrapper className="gallery-inner-wrapper">
          {images.map((image, index) => (
            <InnerContainerWithMediumPadding key={image} isVertical>
              <ImageItem
                image={image}
                alt={alts[index]}
                title={titles[index]}
                index={index}
                titleOnTop={titleImageOnTop}
                marginBottom="500px"
                fullSize={false}
              />
            </InnerContainerWithMediumPadding>
          ))}
          <InnerContainerWithLargePadding isVertical>
            <GalleryTextWrapper style={{ color: "white" }}>
              <Span>Želite videti</Span>
              <Span>več slik?</Span>
            </GalleryTextWrapper>
            <LinkAndSectionNumberContainer>
              <LinkItemContainer>
                <RightBorder />
                <LinkItem
                  text="Galerija slik"
                  linkRef={`/galerija-slik/${galleryLinks}`}
                />
              </LinkItemContainer>
              <SectionNumberContainer>
                <TopBorder noTranslate />
                <SectionNumber
                  number="03"
                  dontAnimate={
                    isTouchDevice() && width < themeContext.breakpoints.xl
                      ? false
                      : true
                  }
                />
                <BottomBorder noTranslate />
              </SectionNumberContainer>
            </LinkAndSectionNumberContainer>
          </InnerContainerWithLargePadding>
        </GalleryInnerWrapper>
      </InnerContainerWithLargePadding>
    </GallerySectionWrapper>
  );
};

//dummy data
const dummyImages = [
  "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1616699343865-1b6be5ca0db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1616604745302-60a195c7061a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80",
  "https://images.unsplash.com/photo-1616263291353-0a89a385ea17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
];
const dummyAlts = ["picture 1", "picture 2", "picture 3", "picture 4"];
const dummyTitles = ["Title One", "Title Two", "Title Three", "Title Four"];

//defaults
GallerySection.defaultProps = {
  images: dummyImages,
  alts: dummyAlts,
  titles: dummyTitles,
};

export default GallerySection;

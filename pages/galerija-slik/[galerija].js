import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import {
  InnerContainer,
  TitleWrapper,
  OuterTitleWrapper,
  SubtitleWrapper,
  Line,
  GalleryContainer,
  ImageContainer,
  TextWrapper,
  TableContainer,
  TableRow,
  OtherGalleryContainer,
} from "../../styles/pages/gallery/GalleryElements";
import {
  BottomBorder,
  RightBorder,
  TopBorder,
  WideContainer,
} from "../../styles/commonStyles";
import Navbar from "../../components/Navbar/index";
import ImageItem from "../../components/ImageItem";
import Footer from "../../components/Footer";
import { SRLWrapper } from "simple-react-lightbox";
import FadeIn from "../../commonAnimations/FadeIn";
import BorderAnimation from "../../commonAnimations/BorderAnimation";
import gsap from "gsap";
import useWindowSize from "../../utils/useWindowSize";
import { ThemeContext } from "styled-components";
import LinkItem from "../../components/LinkItem";
import {
  galleryPictures as pictures,
  gallerySubtitle as subtitle,
  galleryLinks as links,
} from "../../public/data/data";

export async function getStaticPaths() {
  const paths = links.map((link) => ({
    params: { galerija: link.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const galerija = context.params.galerija;
  let type = context.params.type;

  links.map((link) => {
    if (link === galerija) {
      type = links.indexOf(link);
    }
  });

  return {
    props: { galerija: galerija, type: type, key: type },
  };
}

const Gallery = ({
  galleryPictures = pictures,
  type = 0,
  gallerySubtitle = subtitle,
  galleryLinks = links,
}) => {
  let titleRef = useRef();
  let subtitleRef = useRef();
  let lineRef = useRef();
  let titleWrapperRef = useRef();
  const { width } = useWindowSize();
  const [isPictureLoaded, setIsPictureLoaded] = useState(false);
  const themeContext = useContext(ThemeContext);
  let reconstructedLinks = [];
  let reconstructedTitles = [];

  reconstructedTitles = gallerySubtitle.filter(
    (item) => item !== gallerySubtitle[type]
  );

  reconstructedLinks = galleryLinks.filter(
    (item) => item !== galleryLinks[type]
  );

  useLayoutEffect(() => {
    gsap.set(titleWrapperRef, {
      visibility: "hidden",
    });
  }, []);

  useEffect(() => {
    gsap.set(titleWrapperRef, {
      visibility: "visible",
    });

    FadeIn([titleRef, subtitleRef], 0, 0);
    BorderAnimation({ lineRef: lineRef, duration: 2, delay: 0.6 });
  }, []);

  function isLargeDisplay() {
    return width >= themeContext.breakpoints.xl ? true : false;
  }

  return (
    <div style={{ position: "absolute", backgroundColor: "white" }}>
      <Navbar />
      <WideContainer>
        <InnerContainer>
          <OuterTitleWrapper ref={(el) => (titleWrapperRef = el)}>
            <TitleWrapper>
              <h1 ref={(el) => (titleRef = el)}>Galerija</h1>
            </TitleWrapper>
            <TitleWrapper>
              <Line ref={(el) => (lineRef = el)} />
              <SubtitleWrapper>
                <h3 ref={(el) => (subtitleRef = el)}>
                  {gallerySubtitle[type]}
                </h3>
              </SubtitleWrapper>
            </TitleWrapper>
          </OuterTitleWrapper>
          <SRLWrapper>
            <GalleryContainer>
              {galleryPictures[type].map((image, index) => (
                <ImageContainer key={index}>
                  <ImageItem
                    titleOnTop={false}
                    alt={`${gallerySubtitle[type]} - št. slike: (${index + 1})`}
                    title=""
                    image={image}
                    index={index}
                    isgallery
                    animateFadeIn
                  />
                </ImageContainer>
              ))}
            </GalleryContainer>
          </SRLWrapper>
          <OtherGalleryContainer>
            <TextWrapper>
              <span>Oglejte si</span>
              <span>še ostale</span>
              <span>galerije slik.</span>
            </TextWrapper>
            <TableContainer>
              <TableRow>
                <TopBorder color="black" noTranslate />
                <span
                  style={{
                    width: isLargeDisplay() ? "100%" : "50%",
                    position: "relative",
                  }}
                >
                  <LinkItem
                    text={reconstructedTitles[0]}
                    color="black"
                    linkRef={reconstructedLinks[0]}
                  />
                  <RightBorder style={{ backgroundColor: "black" }} />
                </span>

                <span
                  style={{
                    paddingLeft: "0.75rem",
                    width: isLargeDisplay() ? "100%" : "50%",
                  }}
                >
                  <LinkItem
                    text={reconstructedTitles[1]}
                    color="black"
                    linkRef={reconstructedLinks[1]}
                  />
                </span>
                {isLargeDisplay() && (
                  <RightBorder style={{ backgroundColor: "black" }} />
                )}
                <BottomBorder color={"black"} noTranslate />
              </TableRow>
              <TableRow style={{ width: isLargeDisplay() && "33%" }}>
                {isLargeDisplay() && <TopBorder color="black" noTranslate />}
                <span
                  style={{
                    paddingLeft: isLargeDisplay() && "0.75rem",
                    width: isLargeDisplay() ? "100%" : "50%",
                  }}
                >
                  <LinkItem
                    text={reconstructedTitles[2]}
                    color="black"
                    linkRef={reconstructedLinks[2]}
                  />
                </span>

                {!isLargeDisplay() && (
                  <RightBorder
                    style={{
                      backgroundColor: "black",
                      left: "50%",
                      transform:
                        width >= themeContext.breakpoints.md
                          ? "translateX(-2px)"
                          : "translateX(-1px)",
                    }}
                  />
                )}
                <BottomBorder color={"black"} noTranslate />
              </TableRow>
            </TableContainer>
          </OtherGalleryContainer>
        </InnerContainer>
      </WideContainer>
      <Footer color="white" />
    </div>
  );
};

/* //dummy data
const dummyGaleryPictures = [
  [
    "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1616699343865-1b6be5ca0db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1616604745302-60a195c7061a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80",
    "https://images.unsplash.com/photo-1616263291353-0a89a385ea17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
    "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1616699343865-1b6be5ca0db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "https://images.unsplash.com/photo-1616604745302-60a195c7061a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80",
    "https://images.unsplash.com/photo-1616263291353-0a89a385ea17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
    "https://images.unsplash.com/photo-1616451270118-08e97b645fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1616699343865-1b6be5ca0db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  ],
];

const dummyGallerySubtitle = [
  "Subtitle1",
  "Subtitle2",
  "Subtitle3",
  "Subtitle4",
];

//defaults
Gallery.defaultProps = {
  galleryPictures: dummyGaleryPictures,
  gallerySubtitle: dummyGallerySubtitle,
};
 */
export default Gallery;

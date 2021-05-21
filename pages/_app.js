import SimpleReactLightbox from "simple-react-lightbox";
import { ThemeProvider } from "styled-components";
import {
  DARK_COLOR,
  ORANGE_COLOR,
  LARGE_PADDING_DESKTOP,
  LARGE_PADDING_MOBILE,
  MEDIUM_PADDING_DESKTOP,
  MEDIUM_PADDING_MOBILE,
  SMALL_PADDING,
} from "../styles/commonStyles";
import GlobalStyle from "../styles/globalStyle";
import Menu from "../components/Menu/index";
import { MenuProvider } from "../utils/MenuContext";
import { menuExtraInfo } from "../public/data/data";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import isTouchDevice from "../utils/isTouchDevice";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PageTransition from "../components/PageTransition/index";
import gsap from "gsap";

const scrollTrigger = ScrollTrigger;
const scrollTo = ScrollToPlugin;

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxxl: 1600,
    huge: 2000,
  },

  paddings: {
    largeDesktop: LARGE_PADDING_DESKTOP,
    largeMobile: LARGE_PADDING_MOBILE,
    mediumDesktop: MEDIUM_PADDING_DESKTOP,
    mediumMobile: MEDIUM_PADDING_MOBILE,
    small: SMALL_PADDING,
  },

  colors: {
    dark: DARK_COLOR,
    orange: ORANGE_COLOR,
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/" || isTouchDevice()) {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, window.innerHeight);
      };
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Menu menuInfoData={menuExtraInfo} />
        <SimpleReactLightbox>
          <GlobalStyle />
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </Head>
          <PageTransition router={router}>
            <Component {...pageProps} />
          </PageTransition>
        </SimpleReactLightbox>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;

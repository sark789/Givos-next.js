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
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Menu menuInfoData={menuExtraInfo} />
        <SimpleReactLightbox>
          <GlobalStyle />
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;

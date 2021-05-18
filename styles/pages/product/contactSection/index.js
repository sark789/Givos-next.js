import React, { useContext } from "react";
import LinkItem from "../../../../components/LinkItem";
import SectionNumber from "../../../../components/SectionNumber";
import {
  BottomBorder,
  RightBorder,
  TopBorder,
  WideContainer,
} from "../../../../styles/commonStyles";
import { ThemeContext } from "styled-components";
import {
  ContactSectionContainer,
  ContactTextWrapper,
  Span,
  TableCell,
  TableContainer,
  TableRow,
} from "./ContactSectionElements";
import useWindowSize from "../../../../utils/useWindowSize";

const ContactSection = () => {
  const themeContext = useContext(ThemeContext);
  const { width } = useWindowSize();

  function isLargeDisplay() {
    return width >= themeContext.breakpoints.xl ? true : false;
  }
  return (
    <WideContainer>
      <ContactSectionContainer>
        {!isLargeDisplay() && (
          <div>
            <SectionNumber number="04" color="black" />
          </div>
        )}
        <ContactTextWrapper>
          <Span>Vam je všeč</Span>
          <Span>kar vidite?</Span>
          <Span>Kontaktirajte nas.</Span>
        </ContactTextWrapper>
        <TableContainer>
          <TableRow>
            <TopBorder color="black" noTranslate />
            <TableCell>
              info@givos.si
              <RightBorder style={{ backgroundColor: "black" }} />
            </TableCell>
            <TableCell style={{ paddingLeft: "0.75rem" }}>
              {isLargeDisplay() && (
                <RightBorder style={{ backgroundColor: "black" }} />
              )}
              040 568 000
            </TableCell>
            <BottomBorder color={"black"} noTranslate />
          </TableRow>
          <TableRow style={{ width: isLargeDisplay() && "100%" }}>
            {isLargeDisplay() && <TopBorder color="black" noTranslate />}
            <TableCell
              style={{
                height: "44px",
                paddingLeft: isLargeDisplay() && "0.75rem",
                width: isLargeDisplay() && "100%",
              }}
            >
              <LinkItem
                text="Kontaktna stran"
                color="black"
                width={width >= themeContext.breakpoints.md ? "155px" : "120px"}
                linkRef="/kontakt"
              />
              <RightBorder style={{ backgroundColor: "black" }} />
            </TableCell>
            {isLargeDisplay() && (
              <TableCell style={{ paddingLeft: "0.75rem" }}>
                <SectionNumber number="04" color="black" />
              </TableCell>
            )}
            <BottomBorder color={"black"} noTranslate />
          </TableRow>
        </TableContainer>
      </ContactSectionContainer>
    </WideContainer>
  );
};

export default ContactSection;

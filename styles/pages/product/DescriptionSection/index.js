import React, { useEffect, useContext } from "react";
import SectionNumber from "../../../../components/SectionNumber";
import TextBlock from "../../../../components/TextBlock";
import {
  FlipContainer,
  Half,
  InnerContainer,
  MainDescriptionContainer,
  OutterContainer,
  PaddingContainer,
  LargePaddingContainer,
} from "./DescriptionSectionElements";
import { useResizeDetector } from "react-resize-detector";
import { ThemeContext } from "styled-components";

const DescriptionSection = ({
  mainDescription,
  textArray,
  subtitleArray,
  subtitleArray2,
  setStartpoint,
}) => {
  const { width, height, ref } = useResizeDetector();
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    if (window.innerWidth >= themeContext.breakpoints.xl) {
      var paddingOffset = 520;
      if (
        themeContext.breakpoints.xl <= window.innerWidth &&
        window.innerWidth < themeContext.breakpoints.huge
      ) {
        paddingOffset = 512;
      }

      setStartpoint(
        document.getElementsByClassName("description-pin")[0].offsetHeight -
          paddingOffset
      );
    } else {
      setStartpoint(0);
    }
  }, [width, height]);
  return (
    <OutterContainer ref={ref} className="description-pin">
      <InnerContainer>
        <span className="description-inner-container">
          <LargePaddingContainer>
            <SectionNumber number={"02"} />
            <MainDescriptionContainer>
              <h3>&emsp; {mainDescription}</h3>
            </MainDescriptionContainer>
          </LargePaddingContainer>
          <PaddingContainer>
            <TextBlock textArray={textArray} />
          </PaddingContainer>
          <FlipContainer className="end-gallery-trigger">
            <Half>
              <TextBlock
                isWithSubtitles
                subtitleArray={subtitleArray}
                title="Material"
              />
            </Half>
            <Half>
              <TextBlock
                isWithSubtitles
                subtitleArray={subtitleArray2}
                title="Druge tehnične podrobnosti"
              />
            </Half>
          </FlipContainer>
        </span>
      </InnerContainer>
    </OutterContainer>
  );
};

//dummy data
const dummyMainDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet nascetur in duis nibh enim sit merg ora.";

//defaults
DescriptionSection.defaultProps = {
  mainDescription: dummyMainDescription,
};

export default DescriptionSection;

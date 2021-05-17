import React, { useLayoutEffect } from "react";
import { BottomBorder, TopBorder } from "../../styles/commonStyles";
import { InnerContainer, CopyrightContainer } from "./CopyrightElements";

var year = "2021";

const Copyright = ({ color = "black" }) => {
  useLayoutEffect(() => {
    year = new Date().getFullYear();
  });

  return (
    <CopyrightContainer>
      <InnerContainer style={{ color: color }}>
        <TopBorder color={color} />©{year} Givos d.o.o.
        <BottomBorder color={color} />
      </InnerContainer>
    </CopyrightContainer>
  );
};

export default Copyright;

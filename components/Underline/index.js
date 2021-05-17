import styled from "styled-components";
import React from "react";

const UnderlineStyle = styled.div`
  position: absolute;
  bottom: -10%;
  left: 0;
  height: 1px;
  background-color: white;
  width: 100%;
`;

const Underline = ({ classname }) => {
  return (
    <>
      <UnderlineStyle className={`underline-animation ${classname}`} />
    </>
  );
};

export default Underline;

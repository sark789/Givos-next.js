import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const DescriptionAndGalleryWrapper = styled.div`
  visibility: hidden;
  background-color: ${(props) => props.theme.colors.dark};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;

  ${breakpoint("xl")`
        flex-direction: row-reverse;
        padding-bottom: 2000px;
        `}
`;

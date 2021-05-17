import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const DescriptionAndGalleryWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.pinSpace};

  ${breakpoint("xl")`
        flex-direction: row-reverse;
        `}
`;

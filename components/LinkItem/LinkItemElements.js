import styled, { css } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const LinkItemContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  color: white;
  color: ${(props) => props.color};
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.isformenu &&
    css`
      ${breakpoint("md")`
      padding-top: 1rem;
      padding-bottom: 1rem;
        `}
      
      }
    `}
`;

export const StyledLink = styled.a`
  text-decoration: none;
  width: 100%;
  cursor: pointer;
`;

export const LinkText = styled.div`
  width: 100px;
  width: ${(props) => props.width};
  pointer-events: none;

  ${breakpoint("md")`
  width: 120px;
  width: ${(props) => props.width};
    `}

  ${(props) =>
    props.isformenu &&
    css`
      ${breakpoint("md")`
        font-size: 1.8rem;
        width: 200px;
        `}
      
      }
    `}
`;

export const Arrow = styled.div`
  font-size: 1.75rem;
  pointer-events: none;
  display: flex;

  ${(props) =>
    props.isformenu &&
    css`
      ${breakpoint("md")`
      font-size: 2.5rem;
        `}
      
      }
    `}
`;

export const LogoWrapper = styled.div`
  width: 70px;
  height: 100%;

  ${breakpoint("md")`
  width: 90px;
        `}
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

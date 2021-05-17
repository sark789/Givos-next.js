import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${(props) => `${props.theme.paddings.largeMobile} 0`};
  z-index: 2;
  position: relative;

  ${breakpoint("md")`
    width: 75%;
  `}

  ${breakpoint("xl")`
    width: 400px;
    padding: 0;
  `}

  ${breakpoint("xxxl")`
    width: 600px;
    padding-bottom: ${(props) => props.theme.paddings.largeMobile};
  `}
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: ${(props) => props.marginTop};

  ${breakpoint("md")`
      max-width: 600px;
      width: ${(props) => props.width};
    `}

  ${breakpoint("md")`
    max-width: ${(props) => props.maxWidth};
    `}
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  background: transparent;
  color: white;
  padding-bottom: ${(props) => props.theme.paddings.small};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  ${breakpoint("md")`
    font-size: 1.25rem;
  `}
`;

export const Placeholder = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0%;
  top: ${(props) => props.top};
  left: 0;
  color: white;
  pointer-events: none;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 41px;
`;

export const Error = styled.p`
  color: red;
  padding-top: ${(props) => props.theme.paddings.small};
  font-size: 0.875rem;
  padding-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  background: transparent;
  color: white;
  height: 200px;
  padding-left: 2px;
  font-size: 1rem;
  padding-bottom: ${(props) => props.theme.paddings.small};
  padding-top: ${(props) => props.theme.paddings.small};

  ${breakpoint("md")`
    font-size: 1.25rem;
  `}

  ${breakpoint("xxl")`
    height: 18vh;
  `}
`;

export const ButtonWrapper = styled.div`
  margin-top: -0.75rem;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 10px 30px;
  font-size: 1rem;
  background: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${(props) => props.theme.colors.orange};
  }

  ${breakpoint("md")`
    font-size: 1.25rem;
    padding: 15px 38px;
  `}
`;

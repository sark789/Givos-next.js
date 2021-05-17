import React, { useState, useEffect, useContext } from "react";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";
import {
  BottomBorder,
  TopBorder,
  RightBorder,
  LeftBorder,
} from "../../styles/commonStyles";
import {
  FormContainer,
  Button,
  ButtonWrapper,
  Error,
  Input,
  InputWrapper,
  Placeholder,
  TextArea,
  ErrorWrapper,
} from "./FormElements";
import FormPlaceholderAnimation from "./FormAnimations";
import { ThemeContext } from "styled-components";

init(process.env.NEXT_PUBLIC_FORM_INIT);

const Form = ({ formData }) => {
  const themeContext = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const message = "Sporočilo je bilo poslano!";
  const ShowMessage = (message) => {
    setShowMessage(message);
    setTimeout(() => setShowMessage(""), 3000);
  };
  const [showMessage, setShowMessage] = useState("");

  const onSubmit = (data) => {
    ShowMessage(message);

    sendForm("gmail", process.env.NEXT_PUBLIC_FORM_TEMPLATE, "form").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset({});
  };

  const onFocusHandler = (e) => {
    if (e.target.value === "") {
      FormPlaceholderAnimation({
        itemRef: e.target.previousElementSibling,
        textRef: e.target.previousElementSibling.firstChild,
      });
    }
  };

  const onFocusOutHandler = (e) => {
    if (e.target.value === "") {
      FormPlaceholderAnimation({
        itemRef: e.target.previousElementSibling,
        textRef: e.target.previousElementSibling.firstChild,
        reverse: true,
      });
    }
  };

  useEffect(() => {
    reset({});
  }, []);

  return (
    <FormContainer id="form" onSubmit={handleSubmit(onSubmit)}>
      {formData.map((item, index) => (
        <div key={item.placeholder}>
          <InputWrapper
            marginTop={formData.length - 1 === index && "2rem"}
            width={index === 1 || index === 2 ? "75%" : "100%"}
            maxWidth={(index === 1 || index === 2) && "450px"}
          >
            <Placeholder top={formData.length - 1 === index && "-2rem"}>
              <p className="contact-info-animation">
                {item.placeholder}{" "}
                <span style={{ color: themeContext.colors.orange }}>*</span>
              </p>
            </Placeholder>
            {formData.length - 1 === index ? (
              <>
                <TextArea
                  {...register(item.id, { required: true })}
                  onFocus={(e) => onFocusHandler(e)}
                  onBlur={(e) => onFocusOutHandler(e)}
                  id={item.id}
                  name={item.id}
                  type={item.type}
                  error={errors[item.id]}
                ></TextArea>

                <BottomBorder
                  className="contact-border-animation"
                  noTranslate
                />
                <TopBorder className="contact-border-animation" noTranslate />
                <RightBorder className="contact-border-animation-vertical" />
                <LeftBorder className="contact-border-animation-vertical" />
              </>
            ) : (
              <>
                <Input
                  {...register(item.id, {
                    required: true,
                  })}
                  onFocus={(e) => onFocusHandler(e)}
                  onBlur={(e) => onFocusOutHandler(e)}
                  id={item.id}
                  name={item.id}
                  type={item.type}
                  error={errors[item.id]}
                />
                <BottomBorder
                  className="contact-border-animation"
                  noTranslate
                />
              </>
            )}
          </InputWrapper>
          <ErrorWrapper>
            {errors[item.id] && errors[item.id].type === "required" && (
              <Error>{item.error}</Error>
            )}
          </ErrorWrapper>
        </div>
      ))}
      <ButtonWrapper>
        <Button type="submit" className="contact-info-animation">
          Pošlji
        </Button>
      </ButtonWrapper>
      <p style={{ paddingTop: "1rem", height: "40px", color: "green" }}>
        {showMessage}
      </p>
    </FormContainer>
  );
};

//dummy data
const dummyFormData = [
  {
    placeholder: "Placeholder 1",
    id: "placeholder1",
    type: "text",
    error: "Placeholder1 error",
  },
  {
    placeholder: "Placeholder 2",
    id: "placeholder2",
    type: "number",
    error: "Placeholder2 error",
  },
  {
    placeholder: "Placeholder 3",
    id: "placeholder3",
    type: "mail",
    error: "Placeholder3 error",
  },
  {
    placeholder: "Placeholder 4",
    id: "placeholder4",
    type: "text",
    error: "Placeholder4 error",
  },
];

//defaults
Form.defaultProps = {
  formData: dummyFormData,
};

export default Form;

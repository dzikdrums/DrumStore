import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

import { Form, Formik } from 'formik';
import styled, { css } from 'styled-components';

import Button from 'components/common/ButtonLink/ButtonLink';
import Heading from 'components/common/Heading/Heading';
import React from 'react';

const StyledWrapper = styled.div`
  display: flex;
  padding: 50px 40px;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 25px;
  padding: 15px 20px;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  background-color: rgba(34, 34, 34, 0.1);
  border: none;
  outline: none;
  border-radius: 50px;
  color: black;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(34, 34, 34, 1);
  }
`;

const StyledTextArea = styled(StyledInput)`
  margin: 30px 0 0;
  border-radius: 20px;
  height: 30vh;
  resize: none;
`;

const StyledButtonLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2vw;
`;

const StyledError = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: red;
  margin: 0;
  padding: 0;
  position: relative;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  height: 65px;

  ${({ textarea }) =>
    textarea &&
    css`
      height: 38vh;
    `}
`;

const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const sendEmail = ({ name, title, text }) => {
    const templateParams = {
      name,
      email: 'dzikdrums@gmail.com',
      title,
      text,
    };

    emailjs.send('contact_service', 'drumstore', templateParams, 'user_Jim0dFXyLutLvL1H3w6R8');
  };

  return (
    <StyledWrapper>
      <Heading>contact us</Heading>
      <Formik
        initialValues={{ name: '', email: '', title: '', text: '' }}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
        validationSchema={ContactSchema}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInputWrapper>
              <StyledInput
                placeholder="name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? <StyledError>{errors.name}</StyledError> : null}
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledInput
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? <StyledError>{errors.email}</StyledError> : null}
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledInput
                placeholder="title"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title ? <StyledError>{errors.title}</StyledError> : null}
            </StyledInputWrapper>
            <StyledInputWrapper textarea="true">
              <StyledTextArea
                placeholder="text"
                name="text"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text ? <StyledError>{errors.text}</StyledError> : null}
            </StyledInputWrapper>
            <StyledButtonLinkWrapper>
              <Button as="button" type="submit">
                send email
              </Button>
            </StyledButtonLinkWrapper>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default ContactForm;

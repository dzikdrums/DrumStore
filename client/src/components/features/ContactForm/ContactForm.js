import React from 'react';
import styled from 'styled-components';
import Heading from 'components/common/Heading/Heading';
import { Formik, Form } from 'formik';
import Button from 'components/common/ButtonLink/ButtonLink';
import * as emailjs from 'emailjs-com';

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
  padding: 15px 30px;
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
  margin: 30px 0 50px;
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

const ContactForm = () => {
  const sendEmail = ({ email, title, text }) => {
    const templateParams = {
      name: email,
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
        initialValues={{ email: '', title: '', text: '' }}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <StyledInput
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <StyledInput
              placeholder="title"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledTextArea
              placeholder="text"
              name="text"
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            />
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

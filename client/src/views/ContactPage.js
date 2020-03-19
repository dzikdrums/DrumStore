import ContactForm from 'components/features/ContactForm/ContactForm';
import Heading from 'components/common/Heading/Heading';
import React from 'react';
import styled from 'styled-components';

const StyledMap = styled.iframe`
  width: 100%;
  max-width: 500px;
  height: 500px;
  margin: 30px auto;
  border: none;
`;

const ContactPage = () => (
  <>
    <ContactForm />
    <Heading>Visit us</Heading>
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8434.773864566227!2d18.534645121659718!3d54.523951096700614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda732df5bfcfb%3A0x460e0b210dd2122b!2sDrumStore%20-%20Sklep%20Muzyczny!5e0!3m2!1spl!2spl!4v1583915125017!5m2!1spl!2spl"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    />
  </>
);

export default ContactPage;

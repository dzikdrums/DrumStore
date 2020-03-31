import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { getCart, getTotalPrice, resetCart, sendOrder } from 'redux/productsRedux';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledHeaderWrapper = styled.div`
  border: 1px solid #ebebeb;
  padding: 10px 30px;
  align-items: center;
`;

const StyledDetailsWrapper = styled.div`
  border: 1px solid #ebebeb;
  border-top: none;
  border-bottom: none;
  padding: 10px 30px;
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1), padding 300ms 800ms;
  max-height: 3000px;

  ${({ detailsFiled }) =>
    detailsFiled &&
    css`
      max-height: 0px;
      padding: 0 30px;
    `};
`;

const StyledPaymentMethodsWrapper = styled.div`
  border: 1px solid #ebebeb;
  border-top: none;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: max-height 1s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 600ms 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 0;
  visibility: hidden;
  overflow: hidden;

  ${({ detailsFiled }) =>
    detailsFiled &&
    css`
      max-height: 3000px;
      padding: 10px 30px;
      visibility: visible;
      overflow: visible;
    `};

  ${({ methodsFiled }) =>
    methodsFiled &&
    css`
      max-height: 0;
      padding: 0;
      visibility: visible;
      overflow: hidden;
    `};
`;

const StyledNumber = styled.div`
  display: inline-block;
  font-size: 2.2rem;
  border-radius: 50%;
  border: 2px solid #dadada;
  line-height: 38px;
  height: 38px;
  width: 38px;
  text-align: center;
  margin-right: 12px;
  font-weight: 300;
  position: relative;

  ${({ detailsFiled }) =>
    detailsFiled &&
    css`
      border-color: #79b928;
      color: #79b928;

      ::after {
        content: '';
        width: 7px;
        height: 15px;
        border: solid #79b928;
        border-width: 0 3px 3px 0;
        position: absolute;
        top: 48%;
        left: 13px;
        -webkit-transform: translateY(-50%) rotate(45deg) scale(1);
        transform: translateY(-50%) rotate(45deg) scale(1);
      }
    `}
`;

const StyledSpan = styled.span`
  ${({ detailsFiled }) =>
    detailsFiled &&
    css`
      visibility: hidden;
    `}
`;

const StyledHeading = styled.h2`
  font-weight: 400;
  display: inline-block;
  font-size: 2.2rem;

  ${({ detailsFiled }) =>
    detailsFiled &&
    css`
      color: #79b928;
    `}
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 30px;
  padding: 15px 10px;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 300;
  border: 1px solid #ebebeb;
  outline: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    color: rgba(34, 34, 34, 1);
  }
`;

const StyledTextArea = styled(StyledInput)`
  height: 100px;
  resize: none;
`;

const StyledSelect = styled(Select)`
  padding: 10px 10px 0;
  width: 200px;
  outline: none;
  margin: 20px auto;
  font-size: 2rem;
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

  ${({ textarea }) =>
    textarea &&
    css`
      height: 100%;
    `}
`;

const CheckoutForm = ({ sendOrder, cart, price, resetCart }) => {
  const [detailsFiled, setDetailsFiled] = useState(false);
  const [methodsFiled, setMethodsFiled] = useState(false);
  const [hasOrdered, setHasOrdered] = useState(false);
  const [orderDetails, setOrderDetails] = useState();

  const options = [
    {
      value: 'cod',
      label: 'cod',
    },
    {
      value: 'blik',
      label: 'blik',
    },
    {
      value: 'transfer',
      label: 'transfer',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[1]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const CheckoutSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    company: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!'),
    postalAddress: Yup.string()
      .min(2, 'Too Short!')
      .max(200, 'Too Long!')
      .required('Required'),
    postalCode: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    country: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    telephone: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

  const handlePaymendMethod = option => {
    setSelectedOption(option);
    orderDetails.paymentMethod = selectedOption.value;
    setMethodsFiled(!methodsFiled);
    setHasOrdered(!hasOrdered);
    sendOrder(orderDetails);
  };

  const handleSubmit = ({
    email,
    name,
    surname,
    company,
    postalAddress,
    city,
    country,
    postalCode,
    telephone,
  }) => {
    const newOrder = {
      email,
      name,
      surname,
      company,
      postalAddress,
      postalCode,
      city,
      country,
      telephone,
      cart,
      price,
      paymentMethod: selectedOption,
    };
    setOrderDetails(newOrder);
    resetCart();
    localStorage.clear();
  };

  const customStyles = {
    option: provided => ({
      ...provided,
      color: 'black',
      padding: 10,
      border: 'none',
    }),
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };

  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledNumber detailsFiled={detailsFiled}>
          <StyledSpan detailsFiled={detailsFiled}>1</StyledSpan>
        </StyledNumber>
        <StyledHeading detailsFiled={detailsFiled}>Your details</StyledHeading>
      </StyledHeaderWrapper>
      <StyledDetailsWrapper detailsFiled={detailsFiled}>
        <Formik
          initialValues={{
            email: '',
            name: '',
            surname: '',
            company: '',
            postalAddress: '',
            postalCode: '',
            city: '',
            country: '',
            telephone: '',
          }}
          onSubmit={values => {
            handleSubmit(values);
            setDetailsFiled(!detailsFiled);
          }}
          validationSchema={CheckoutSchema}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <StyledForm>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="email*"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? <StyledError>{errors.email}</StyledError> : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="name*"
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
                  placeholder="surname*"
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                {errors.surname && touched.surname ? (
                  <StyledError>{errors.surname}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="company"
                  type="text"
                  name="company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company}
                />
                {errors.company && touched.company ? (
                  <StyledError>{errors.company}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledTextArea
                  placeholder="postal address*"
                  type="text"
                  as="textarea"
                  name="postalAddress"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalAddress}
                />
                {errors.postalAddress && touched.postalAddress ? (
                  <StyledError>{errors.postalAddress}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="city*"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                {errors.city && touched.city ? <StyledError>{errors.city}</StyledError> : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="country*"
                  type="text"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                {errors.country && touched.country ? (
                  <StyledError>{errors.country}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="postal code*"
                  type="text"
                  name="postalCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                />
                {errors.postalCode && touched.postalCode ? (
                  <StyledError>{errors.postalCode}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput
                  placeholder="telephone number*"
                  type="text"
                  name="telephone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephone}
                />
                {errors.telephone && touched.telephone ? (
                  <StyledError>{errors.telephone}</StyledError>
                ) : null}
              </StyledInputWrapper>
              <StyledButtonLinkWrapper>
                <Button type="submit">proceed to payment</Button>
              </StyledButtonLinkWrapper>
            </StyledForm>
          )}
        </Formik>
      </StyledDetailsWrapper>
      <StyledHeaderWrapper>
        <StyledNumber detailsFiled={methodsFiled}>
          <StyledSpan detailsFiled={methodsFiled}>2</StyledSpan>
        </StyledNumber>
        <StyledHeading detailsFiled={methodsFiled}>Payment methods</StyledHeading>
      </StyledHeaderWrapper>
      <StyledPaymentMethodsWrapper detailsFiled={detailsFiled} methodsFiled={methodsFiled}>
        <StyledSelect
          styles={customStyles}
          value={{ label: selectedOption.label }}
          onChange={handleChange}
          options={options}
          isSearchable={false}
        />
        <Button onClick={handlePaymendMethod}>place order</Button>
      </StyledPaymentMethodsWrapper>
      {hasOrdered && <Button reverse="true">Thank You for your order!</Button>}
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: payload => dispatch(sendOrder(payload)),
  resetCart: () => dispatch(resetCart()),
});

CheckoutForm.propTypes = {
  cart: PropTypes.array,
  price: PropTypes.string,
  resetCart: PropTypes.func,
  sendOrder: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);

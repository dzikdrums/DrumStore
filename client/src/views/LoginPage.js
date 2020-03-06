import React from 'react';
import grandpa from 'assets/grandpa.jpg';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 300px;
  margin: 0 auto;
`;

const LoginPage = () => (
  <StyledWrapper>
    <h1>LoginPage is currently in progess... ;) </h1>
    <StyledImage src={grandpa} />
  </StyledWrapper>
);

export default LoginPage;

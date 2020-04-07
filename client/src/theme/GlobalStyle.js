import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: itc-avant-garde-gothic-pro, sans-serif;
    }

    a {
      text-decoration: none;
    }
`;

export default GlobalStyle;

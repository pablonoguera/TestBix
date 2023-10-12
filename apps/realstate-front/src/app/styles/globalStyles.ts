import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  img {
    outline: none;
  }

  body {
    margin: 0;
    background-color: #E5E5E5;
  }

  small {
    font-size: 13px !important;
  }

  strong {
    font-weight: 500;
  }
`;

export default GlobalStyle;

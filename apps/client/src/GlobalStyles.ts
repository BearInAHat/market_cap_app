import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: "Readex Pro", sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  html, body, #root {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  *:focus, button:focus, textarea:focus, input:focus {
    outline: none;
  }
  button {
    outline: none;
  }
`;

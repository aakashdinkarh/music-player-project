import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --grey: #808080;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --skyBlue: #00fdff;
    --darkSkyBlue: #1b7070;
    --fontBig: 2rem;
    --fontMed: 1.5rem;
    --fontSmall: 1.2rem;
    --fontExtraSmall: 1rem;
  }
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  div#root {
    height: 100%;
  }
`;

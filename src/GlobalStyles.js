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
    margin: 0;
    padding: 0;
    background: var(--darkGrey);
    color: var(--white);
  }
  div#root {
    height: 100%;
    overflow: auto;
  }
  /* scrollbar -- start -- */
  /* Scrollbar for WebKit Browsers */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }
  /* Scrollbar for Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #aaa transparent;
  }
  /* scrollbar -- end -- */
  .tempAlert {
    position: absolute;
    top: 0;
    left: 50%;
    height: 0px;
    width: 50%;
    line-height: 50px;
    text-align: center;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 5px;
    transition: all 0.4s;
    animation: tempAlertAnimate 4s ease-in-out;
    box-shadow: 0 0 5px white;
    overflow: hidden;
  }
  @keyframes tempAlertAnimate {
    0%, 100% {
      height: 0;
      top: 0;
    }
    10%, 90% {
      height: 50px;
      top: 3%;
    }
  }
`;

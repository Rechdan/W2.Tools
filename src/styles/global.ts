import { createGlobalStyle, css } from "styled-components";

import { FONT } from "_/consts";

const globalCss = css`
  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    & > * {
      line-height: inherit;
      color: inherit;
      font: inherit;
    }
  }

  html,
  body {
    font-family: ${FONT.style.fontFamily};
    background-color: black;
    overflow: hidden;
    font-size: 16px;
    color: white;
  }

  a {
    text-decoration: none;
  }

  a,
  label,
  button {
    cursor: pointer;
  }

  b,
  strong {
    font-weight: 700;
  }
`;

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default GlobalStyle;

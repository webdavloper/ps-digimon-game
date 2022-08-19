import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    position: fixed;
    inset: 0;
    width: 100wh;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: none;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  ul{
    list-style: none;
  }
`;

export default GlobalStyles;

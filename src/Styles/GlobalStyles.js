import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  ;

  * {
    box-sizing: border-box;

  }

  body {
    background-color: #1E2428;
    color: #fff;
  }

  input, textarea, button {
    outline: none;
    border: none;
  }

  button, select {
    cursor: pointer;
  }


`;
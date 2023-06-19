import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  
    a {

        text-decoration: none;
        color: inherit;
        
    }

    body {

        font-family: 'Inter', sans-serif;
        background-image: url('/images/background-stars.svg');
        background-color: #070724;
        height: 100vh;
        width: 100vw;
        color: white;

    }

    *{
       margin: 0;
    }

`

export {GlobalStyles}
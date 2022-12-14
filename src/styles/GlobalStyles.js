import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secundary: #EB5757;
        --color-grey-scale600: #333333;
        --color-grey-scale300: #828282;
        --color-grey-scale100: #E0E0E0;
        --color-grey-scale0: #f5f5f5;
    }

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

`;

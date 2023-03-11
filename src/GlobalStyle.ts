import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;   
    --Purple: #8284FA;
    --PurpleDark: #5E60CE;
    --Blue: #4EA8DE;
    --BlueDark: #1E6F9F;
    --Danger: #E25858;
    --Background: #454545;
}

* {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
};


body {
    background: var(--gray-600);
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
}

body,
input,
textarea,
button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border: none;
}
`;

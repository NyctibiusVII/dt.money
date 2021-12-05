import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --white: #fff;
        --black: #000;

        --gray-100: #f0f2f5;
        --gray-200: #e7e9ee;
        --gray-300: #d7d7d7;
        --gray-400: #969cb3;
        --gray-500: #363f5f;

        --blue-100: #6933ff;
        --blue-200: #5429cc;

        --green-100: #33cc95;
        --red-100: #e52e40;

        --background: var(--gray-100);
        --shape: var(--white);

        --text-title: var(--gray-500);
        --text-body: var(--gray-400);
    }
    html {
        @media (max-width: 1080px) { font-size: 93.75%; }
        @media (max-width:  720px) { font-size: 87.50%; }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong { font-weight: 600; }

    button { cursor: pointer; }
    [disabled] { cursor: not-allowed; opacity: 0.6; }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 100;
    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;

        background-color: var(--background);

        padding: 3rem;

        position: relative;

        border-radius: 0.25rem;
    }
    .react-modal-close {
        background-color: transparent;
        border: 0;
        font-size: 0;

        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        transition: 0.2s;

        &:hover { filter: brightness(0.8); }
    }
`
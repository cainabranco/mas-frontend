import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  :root {
        --background: #bdbebd;
        --green: #3CB371;
        --greenDark: #135832;
        --text-body: #545454;
        --backgroundCard: #f0f2f5;
        --text-title: #135832;
        --text-table: #3f3f3f;
        --text-dark: #000;
        --shape: #ffffff;
    }

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text-body);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: serif;
        font-size: 16px;
    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

.react-modal-overlay {
    background: rgba(0,0,0,0.5);

    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;

    display: flex;
    align-items: center;
    justify-content: center;
    
}
                
.react-modal-content {
    width: 100%;    
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.6);
    }
}
`

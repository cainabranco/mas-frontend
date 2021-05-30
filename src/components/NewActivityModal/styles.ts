import styled from 'styled-components'

export const Container = styled.div`

   h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;

        font-size: 1.2rem;

        &::placeholder {
            color: var(--text-dark);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    } 
`;

export const Error = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    color: coral;
`;
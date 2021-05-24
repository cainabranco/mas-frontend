import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -100px;


    div {
        background: var(--backgroundCard);
        padding: 1.5rem 1.5rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                font-size: 1.5rem;
                font-weight: bold;
            }
        }


        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: bold;
            line-height: 3rem;
        }

        &.highlight-background {
        background: var(--greenDark);
        color: #fff;
    }
`;
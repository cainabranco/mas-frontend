import styled from 'styled-components';
import { shade } from 'polished';

import loginBackgroundImg from '../../assets/bg-shapes.svg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 700px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 30px;
        font-weight: bold;
        color: #3CB371;
        
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: ${shade(0.2, '#f4ede8')};
        }
    }


    > a {
    color: #3CB371;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#3CB371')};
    }
  }
`;

export const InputContainer = styled.div`
    background: #ffffff;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #3CB371;
    color: #3CB371;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 10px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #6a6a6a;

        &::placeholder {
            color: #3CB371;
        }
    }

    svg {
        margin-right: 16px;
    }

`;

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #1B7E48 0%, rgba(255, 255, 255, 0) 100%), #3CB371 url(${loginBackgroundImg}) no-repeat center;
  background-size: cover;
`;
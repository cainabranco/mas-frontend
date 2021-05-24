import styled from "styled-components";
import {shade} from 'polished';

export const Container = styled.button`
    background: var(--green);
    height: 50px;
    border-radius: 10px;
    border: 0;
    padding: 0 15px;
    color: var(--greenDark);
    width: 100%;
    font-weight: bold;
    margin-top: 15px;
    transition: background-color 0.2s;

    &:hover {
    background: ${shade(0.2, '#3CB371')};
  }
`;
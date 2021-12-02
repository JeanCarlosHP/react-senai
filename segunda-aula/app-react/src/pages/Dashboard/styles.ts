import styled from "styled-components";
import { shade } from "polished";

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
    display: flex;
    
    margin-top: 40px;
    max-width: 700px;

    input {
        flex: 1;
        height: 40px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }

    button {
        width: 210px;
        height: 40px;
        background: #04D361;
        border: 0;
        border-radius: 0 5px 5px 0;
        color: #fff;
        font-weight: blod;

        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.1, "#04d361")};
        }
    }
`

export const Repositories = styled.div `
    margin-top: 80px;
    max-width: 700px;
`
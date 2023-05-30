import styled from "styled-components";
import { InputProps } from "./InputCustom.interface";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
`;
export const Input = styled.input<InputProps>`
  width: ${({ width }) => width};
  border-radius: 50px;
  color: #fff;
  padding-left: 23px;
  text-transform: capitalize;
  border: none;
  border-bottom: 1.5px solid #d1adad;
  :focus {
    outline: none;
    border-bottom: 1.5px solid #171212;
  }
  :placeholder-shown {
    padding: 0;
    text-align: center;
  }
`;
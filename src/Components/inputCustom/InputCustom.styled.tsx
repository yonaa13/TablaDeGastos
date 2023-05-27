import styled from "styled-components";
import { InputProps } from "./InputCustom.interface";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top:12px;
`;
export const Input = styled.input<InputProps>`
  width: ${({ width }) => width};
`;

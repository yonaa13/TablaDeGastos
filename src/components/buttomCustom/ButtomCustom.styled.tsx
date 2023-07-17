import styled from "styled-components";
import { ButtonProps } from "./Buttom.interface";
export const ContainerButton = styled.div``;
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px auto;
  min-width: ${({ width }) => width};
  height: 32px;
  color: #ffffff;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: monospace;
  background-color: #248f6b;
  cursor: pointer;
`;
export const Icon = styled.div`
  padding-right: 12px;
`;

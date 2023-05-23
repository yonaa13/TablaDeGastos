import styled from "styled-components";

export const ContainerInput = styled.h1`
  display: flex;
  justify-content: end;
`;
export const Label = styled.label`
  font-size: 1rem;
  padding-right: 12px;
`;
export const Input = styled.input`
  width: 150px;
  border-radius: 50px;
  font-weight: bold;
  text-transform: capitalize;
  border: none;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

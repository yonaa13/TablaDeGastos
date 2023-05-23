import { FC } from "react";
import { InputTablaProps } from "./InputTabla.interface";
import {ContainerInput ,Label, Input} from "./ImputTabla.stiled"
export const InputTabla: FC<InputTablaProps> = ({ label, type }) => {
  return (
    <ContainerInput>
      <Label>{label}:</Label>
      <Input type={type} />
    </ContainerInput>
  );
};

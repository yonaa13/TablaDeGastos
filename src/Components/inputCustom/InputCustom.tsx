import { FC } from "react";
import { InputProps } from "./InputCustom.interface";
import { ContainerInput,Input } from "./InputCustom.styled";
export const InputCustom: FC<InputProps> = ({ type = "text", width }) => {
  return (
    <ContainerInput>
      <Input type={type} width={width} />
    </ContainerInput>
  );
};

import { FC } from "react";
import { InputProps } from "./InputCustom.interface";
import { ContainerInput, Input } from "./InputCustom.styled";
export const InputCustom: FC<InputProps> = ({
  type = "text",
  width = "250px",
  placeholder,
}) => {
  return (
    <ContainerInput>
      <Input type={type} width={width} placeholder={placeholder} />
    </ContainerInput>
  );
};

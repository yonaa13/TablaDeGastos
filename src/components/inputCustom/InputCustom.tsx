import { FC } from "react";
import { Props } from "./InputCustom.interface";
import { ContainerInput, Input } from "./InputCustom.styled";
export const InputCustom: FC<Props> = ({
  type = "text",
  width = "250px",
  placeholder,
  setValue,
  value,
}): any => {
  return (
    <ContainerInput>
      <Input
        type={type}
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={(e: { target: { value: string } }) =>
          setValue(e.target.value)
        }
      />
    </ContainerInput>
  );
};

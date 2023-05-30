import { FC } from "react";
import { ButtonProps } from "./Buttom.interface";
import { Icon, ContainerButton, Button } from "./ButtomCustom.styled";
export const ButtomCustom: FC<ButtonProps> = ({ label, icon }):any => {
  return (
    <ContainerButton>
      <Icon>{icon}</Icon>
      <Button>{label}</Button>
    </ContainerButton>
  );
};

import { FC } from "react";
import { ButtonProps } from "./Buttom.interface";
import {Icon, ContainerButton,Button} from './Buttom.styled'
export const ButtomCustom: FC<ButtonProps> = ({ label, icon }) => {
  return (
    <ContainerButton>
      <Icon>{icon}</Icon>
      <Button>{label}</Button>
    </ContainerButton>
  );
};

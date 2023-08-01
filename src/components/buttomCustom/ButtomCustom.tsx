import { FC } from "react";
import { ButtonProps } from "./Buttom.interface";
import { Icon, Button } from "./ButtomCustom.styled";
export const ButtomCustom: FC<ButtonProps> = ({ label, icon, width,onClick }): any => {
  return (
    <Button width={width} onClick={onClick}>
      {icon && <Icon>{icon}</Icon>}
      {label}
    </Button>
  );
};

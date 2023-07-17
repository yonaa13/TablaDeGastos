import { FC } from "react";
import { ButtonProps } from "./Buttom.interface";
import { Icon, Button } from "./ButtomCustom.styled";
export const ButtomCustom: FC<ButtonProps> = ({ label, icon, width }): any => {
  return (
    <Button width={width}>
      {icon && <Icon>{icon}</Icon>}
      {label}
    </Button>
  );
};

import { ReactElement } from "react";

export interface ButtonProps {
  label?: string;
  icon?: ReactElement;
  width?:string
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

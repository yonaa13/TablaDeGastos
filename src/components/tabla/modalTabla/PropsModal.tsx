import { Dispatch, SetStateAction } from "react";
export interface PropsModal {
  id?: number;
  closeModal:Dispatch<SetStateAction<boolean>>
}

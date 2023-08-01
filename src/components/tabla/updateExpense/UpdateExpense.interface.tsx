import { Dispatch, SetStateAction } from "react";
import { DocumentData } from "firebase/firestore";
export interface UpdateProps {
  id?: string;
  value?: string | number;
  closeModal:Dispatch<SetStateAction<boolean>>
  setValue:Dispatch<SetStateAction<object>>
  setData?: DocumentData
}

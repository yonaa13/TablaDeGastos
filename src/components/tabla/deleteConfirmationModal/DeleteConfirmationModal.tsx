import {FC} from 'react'
import { deleteUser } from "../../../firabase/DataBase";
import { ConfirmationContainer, P, Button,IconClose } from "./DeleteConfirmationModal.stiled";
import { PropsDeleteConfirmation } from "./DeleteConfirmation.interface";
import { FaTimes } from "react-icons/fa";
export const DeleteConfirmationModal:FC<PropsDeleteConfirmation> = ({id, closeDeleteConfiramation}) => {
  return (
    <ConfirmationContainer>
         <IconClose onClick={() => closeDeleteConfiramation(false)}>
        <FaTimes />
      </IconClose>
        <P>Desea eliminar este archivo</P>
      <Button onClick={()=> {deleteUser(id); closeDeleteConfiramation(false)}}>Confirmar</Button>
    </ConfirmationContainer>
  );
};

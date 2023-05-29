import {FC} from 'react'
import { ContainerModal } from "./Modal.styled";
import { ModalProps } from "./Modal.interface";
export const Modal:FC<ModalProps> = ({isActive}) => {
  return (
    <ContainerModal onClick={()=>{{isActive =false}}}>Modal</ContainerModal>
  )
}

import { FC } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import { PropsModal } from "./PropsModal";
import {
  ContainerModal,
  ContainerCategory,
  Span
} from "../../tabla/modalTabla/ModalTabla.stiled";
export const ModalTabla: FC<PropsModal> = ({ id }) => {
  const { registrosContext } = useGlobalContext();
  const registro = registrosContext.filter((ele) => ele.id == id);
  return (
    <ContainerModal>
      {registro.map((ele) => {
        return (
          <ContainerCategory>
            <p>Categoria:<Span>{ele.category}</Span> </p>
            <p>Descripcion: <Span>{ele.Descripcion}</Span></p>
            <p>Monto:<Span>{ele.Monto}</Span> </p>
            <p>Completado:<Span>{ele.Completado}</Span> </p>
            <p> Real:<Span>{ele.Real}</Span> </p>
            <p>Proyeccion:<Span>{ele.Proyeccion}</Span> </p>
          </ContainerCategory>
        );
      })}
    </ContainerModal>
  );
};

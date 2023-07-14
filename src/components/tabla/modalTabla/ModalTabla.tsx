import { FC } from "react";
import { data } from "../../../firabase/DataBase";
import { PropsModal } from "./PropsModal";
import { FaTimes } from "react-icons/Fa";
import {
  ContainerModal,
  ContainerCategory,
  Span,
  IconClose,
} from "../../tabla/modalTabla/ModalTabla.stiled";
export const ModalTabla: FC<PropsModal> = ({ id, closeModal }) => {
  const registro = data().filter((ele) => ele.id == id);
  return (
    <ContainerModal>
      {registro.map((ele) => {
        return (
          <ContainerCategory>
            <IconClose onClick={() => closeModal(false)}>
              <FaTimes />
            </IconClose>

            <p>
              Categoria:<Span>{ele.categoria}</Span>{" "}
            </p>
            <p>
              Descripcion: <Span>{ele.descripcion}</Span>
            </p>
            <p>
              Monto:<Span>{ele.monto}</Span>{" "}
            </p>
            <p>
              Completado:<Span>{ele.completado}</Span>{" "}
            </p>
            <p>
              {" "}
              Real:<Span>{ele.real}</Span>{" "}
            </p>
            <p>
              Proyeccion:<Span>{ele.proyeccion}</Span>{" "}
            </p>
          </ContainerCategory>
        );
      })}
    </ContainerModal>
  );
};

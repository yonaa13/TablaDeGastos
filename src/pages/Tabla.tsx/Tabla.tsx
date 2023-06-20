import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { ModalTabla } from "../../components/tabla/modalTabla/ModalTabla";
import {
  ContainerTabla,
  Tr,
  Td,
  H1,
  RedirectHome,
  TdTitle,
  TdIcon,
} from "./Tabla.stiled";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
export const Tabla = () => {
  const { registrosContext } = useGlobalContext();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [idModal, setIdModal] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <ContainerTabla>
      <H1>Tabla de Registros</H1>
      <Tr>
        <TdTitle></TdTitle>
        <TdTitle>category</TdTitle>
        <TdTitle>Descripcion</TdTitle>
        <TdTitle>Monto</TdTitle>
        <TdTitle>Completado</TdTitle>
        <TdTitle>Real</TdTitle>
        <TdTitle>Proyeccion</TdTitle>
        {registrosContext.map((ele) => {
          return (
            <div>
              <td>
                <TdIcon>
                  <FiEdit />
                  <BiShowAlt
                    onClick={() => {
                      setShowModal(!showModal);
                      setIdModal(ele.id);
                    }}
                  />
                  {showModal && <ModalTabla id={idModal} />}
                  <MdDeleteForever />
                </TdIcon>
                <Td>{ele.category}</Td>
                <Td>{ele.Descripcion}</Td>
                <Td>{ele.Monto}</Td>
                <Td>{ele.Completado}</Td>
                <Td>{ele.Real}</Td>
                <Td>{ele.Proyeccion}</Td>
              </td>
            </div>
          );
        })}
      </Tr>
      <RedirectHome onClick={() => navigate("/home")}>Ir a Home</RedirectHome>
    </ContainerTabla>
  );
};

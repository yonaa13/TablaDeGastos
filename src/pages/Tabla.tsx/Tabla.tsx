import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { data, deleteUser, updateFirebaseDoc } from "../../firabase/DataBase";
import { MdDeleteForever } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { ModalTabla } from "../../components/tabla/modalTabla/ModalTabla";
import { UpdateExpense } from "../../components/tabla/updateExpense/UpdateExpense";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { NewExpense } from "../../components/tabla/newExpense/NewExpense";
import {
  Container,
  H1,
  RedirectHome,
  ContainerLista,
  ContainerIcons,
  ContainerLabel,
  Label,
  LabelMonto,
  ContainerIconsDelete,
} from "./Tabla.stiled";
import { useNavigate } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
export const Tabla = () => {
  
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [idModalUpdate, setIdModalUpdate] = useState<string>('');
  const [newExpense, setNewExpense] = useState<boolean>(false);
  const [idModal, setIdModal] = useState<number>(0);
  const [dataUpdate, setDataUpdate] = useState<object>({});
  const [elemento, setElemento] = useState<DocumentData>();
  const navigate = useNavigate();
 
  useEffect(() => {
      updateFirebaseDoc("gastos", idModalUpdate, dataUpdate);
  }, [dataUpdate]);
  
  return (
    <Container>
      <H1>
        <BsFillPlusCircleFill onClick={() => setNewExpense(!newExpense)} />
        Tabla de Registros
      </H1>
      {newExpense && <NewExpense closeModalGasto={setNewExpense} />}
      {data()?.map((ele) => {
        return (
          <ContainerLista key={ele.id}>
            <ContainerIcons>
              <FiEdit
                onClick={() => {
                  setModalUpdate(!modalUpdate);
                  setIdModalUpdate(ele.id);
                  setElemento(ele)
                }}
              />
              <BiShowAlt
                onClick={() => {
                  setShowModal(!showModal);
                  setIdModal(ele.id);
                }}
              />
            </ContainerIcons>
            <ContainerLabel>
              <Label>{ele.categoria}</Label>
              <Label>{ele.descripcion}</Label>
              <LabelMonto>$ {ele.monto}</LabelMonto>
            </ContainerLabel>
            <ContainerIconsDelete>
              <MdDeleteForever onClick={() => deleteUser(ele.id)} />
            </ContainerIconsDelete>
          </ContainerLista>
        );
      })}
      {showModal && <ModalTabla id={idModal} closeModal={setShowModal} />}
      {modalUpdate && <UpdateExpense id={idModalUpdate} closeModal={setModalUpdate} setValue={setDataUpdate} setData={elemento}/>}
      <RedirectHome onClick={() => navigate("/home")}>Ir a Home</RedirectHome>
    </Container>
  );
};

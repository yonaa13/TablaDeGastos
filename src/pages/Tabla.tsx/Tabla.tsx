import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { data, deleteUser, getdata } from "../../firabase/DataBase";
import { MdDeleteForever } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { ModalTabla } from "../../components/tabla/modalTabla/ModalTabla";
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
  ContainerModal,
} from "./Tabla.stiled";
import { useNavigate } from "react-router-dom";
export const Tabla = () => {
  const expenseInitial = {
    categoria: "dfsdf",
    descripcion: "4535",
    monto: 10,
    completado: 10,
    real: 10,
    proyeccion: 10,
  };
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [idModalUpdate, setIdModalUpdate] = useState<string>("");
  const [newExpense, setNewExpense] = useState<boolean>(false);
  const [expense, setExpense] = useState(expenseInitial);
  const [idModal, setIdModal] = useState<number>(0);
  const navigate = useNavigate();

  const editHandler = async () => {
      const docSnap = await getdata("gastos",idModalUpdate);
      setExpense(
        ((expense.categoria = docSnap.data()?.categoria),
        (expense.descripcion = docSnap.data()?.descripcion),
        (expense.monto = docSnap.data()?.monto),
        (expense.completado = docSnap.data()?.completado),
        (expense.real = docSnap.data()?.real),
        (expense.proyeccion = docSnap.data()?.proyeccion))
      )
  };
  useEffect(() => {
    if (idModalUpdate !== "") {
      editHandler();
    }
  }, [idModalUpdate]);

  const modalEdit =() => {
    return(
      <ContainerModal>
        <p>{expense.monto}</p>
        <p>{expense.categoria}</p>
      </ContainerModal>
    );
  };
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
      {modalUpdate && modalEdit()}
      <RedirectHome onClick={() => navigate("/home")}>Ir a Home</RedirectHome>
    </Container>
  );
};

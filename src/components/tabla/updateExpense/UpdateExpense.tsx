import { FC, useState } from "react";
import { UpdateProps } from "./UpdateExpense.interface";
import {
  ContainerExpense,
  ContainerModalUpdate,
  IconClose,
  H3,
} from "./UpdateExpense.styled";
import { InputCustom } from "../../inputCustom/InputCustom";
import { ButtomCustom } from "../../buttomCustom/ButtomCustom";
import { FaTimes } from "react-icons/Fa";
export const UpdateExpense: FC<UpdateProps> = ({
  closeModal,
  setValue,
  setData,
}) => {
  const [categoria, setCategoria] = useState<string | number>(setData?.categoria);
  const [descripcion, setDescripcion] = useState<string | number>(setData?.descripcion);
  const [monto, setMonto] = useState<string | number>(setData?.monto);
  const [completado, setCompletado] = useState<string | number>(setData?.completado);
  const [real, setReal] = useState<string | number>(setData?.real);
  const [proyeccion, setProyeccion] = useState<string | number>(setData?.proyeccion);

  let expense = {
    categoria: categoria,
    descripcion: descripcion,
    monto: monto,
    completado: completado,
    real: real,
    proyeccion: proyeccion,
  };
  return (
    <ContainerExpense>
      <IconClose onClick={() => closeModal(false)}>
        <FaTimes />
      </IconClose>
      <H3>Update Expense</H3>
      <ContainerModalUpdate>
        <InputCustom
          width="200px"
          label="Categoria:"
          type="text"
          value={categoria}
          setValue={setCategoria}
        />
        <InputCustom
          width="200px"
          label="Descripcion :"
          type="text"
          value={descripcion}
          setValue={setDescripcion}
        />
        <InputCustom
          width="200px"
          label="Monto:"
          type="number"
          value={monto}
          setValue={setMonto}
        />
        <InputCustom
          width="200px"
          label="Completado:"
          type="number"
          value={completado}
          setValue={setCompletado}
        />
        <InputCustom
          width="200px"
          label="Real:"
          type="number"
          value={real}
          setValue={setReal}
        />
        <InputCustom
          width="200px"
          label="Proyeccion:"
          type="number"
          value={proyeccion}
          setValue={setProyeccion}
        />
        <ButtomCustom
          label="Envia"
          width="200px"
          onClick={() => setValue(expense)}
        />
      </ContainerModalUpdate>
    </ContainerExpense>
  );
};

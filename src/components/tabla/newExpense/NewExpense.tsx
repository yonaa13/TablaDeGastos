import { FC, useState } from "react";
import { InputCustom } from "../../inputCustom/InputCustom";
import { ButtomCustom } from "../../buttomCustom/ButtomCustom";
import {
  Container,
  H1,
  CloseModalGasttos,
  SaveExpense,
} from "./NewExpense.stiled";
import { PropsGastos } from "./NewExpense.interface";
import { FaTimes } from "react-icons/Fa";
import { guardarDato } from "../../../firabase/DataBase";
export const NewExpense: FC<PropsGastos> = ({ closeModalGasto }) => {

  const [categoria, setCategoria] = useState<string | number>();
  const [descripcion, setDescripcion] = useState<string | number>();
  const [monto, setMonto] = useState<string | number>();
  const [completado, setCompletado] = useState<string | number>();
  const [real, setReal] = useState<string | number>();
  const [proyeccion, setProyeccion] = useState<string | number>();
  const handleClick = ()=>{
    const gasto = {
        categoria:categoria,
        descripcion:descripcion,
        monto:monto,
        completado:completado,
        proyeccion:proyeccion
    }
   guardarDato('gastos',gasto)
  }
  
  
  return (
    <Container>
      <CloseModalGasttos>
        <FaTimes onClick={() => closeModalGasto(false)} />
      </CloseModalGasttos>
      <H1>Nuevo gasto</H1>
      <InputCustom
        type={"text"}
        placeholder={"Categoria"}
        value={categoria}
        setValue={setCategoria}
      />
      <InputCustom
        type={"text"}
        placeholder={"Descripcion"}
        value={descripcion}
        setValue={setDescripcion}
      />
      <InputCustom
        type={"number"}
        placeholder={"Monto"}
        value={monto}
        setValue={setMonto}
      />
      <InputCustom
        type={"number"}
        placeholder={"Completado"}
        value={completado}
        setValue={setCompletado}
      />
      <InputCustom
        type={"number"}
        placeholder={"Real"}
        value={real}
        setValue={setReal}
      />
      <InputCustom
        type={"number"}
        placeholder={"Proyeccion"}
        value={proyeccion}
        setValue={setProyeccion}
      />

      <SaveExpense onClick={() => handleClick() }>
        <ButtomCustom label="Agregar" />
      </SaveExpense>
    </Container>
  );
};

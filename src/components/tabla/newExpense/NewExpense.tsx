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
  const handleClick = () => {
    const gasto = {
      categoria: categoria,
      descripcion: descripcion,
      monto: monto,
      completado: completado ? completado : 0,
      proyeccion: proyeccion ? proyeccion : 0,
      real: real ? real : 0,
    };
    guardarDato("gastos", gasto);
  };

  return (
    <Container>
      <CloseModalGasttos>
        <FaTimes onClick={() => closeModalGasto(false)} />
      </CloseModalGasttos>
      <H1>Nuevo gasto</H1>
      <InputCustom
        label={"Categoria"}
        type={"text"}
        value={categoria}
        setValue={setCategoria}
      />
      <InputCustom
        label={"Descripcion"}
        type={"text"}
        value={descripcion}
        setValue={setDescripcion}
      />
      <InputCustom
        label={"Monto"}
        type={"number"}
        value={monto}
        setValue={setMonto}
      />
      <InputCustom
        label={"Completado"}
        type={"number"}
        value={completado}
        setValue={setCompletado}
      />
      <InputCustom
        label={"Real"}
        type={"number"}
        value={real}
        setValue={setReal}
      />
      <InputCustom
        label={"Proyeccion"}
        type={"number"}
        value={proyeccion}
        setValue={setProyeccion}
      />

      <SaveExpense onClick={() => handleClick()}>
        <ButtomCustom label="Agregar" width="200px" />
      </SaveExpense>
    </Container>
  );
};

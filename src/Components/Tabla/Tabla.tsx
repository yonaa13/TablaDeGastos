import { InputTabla } from "../ImputTabla/InputTabla";
import {ContainerTabla} from './Tabla.styled'
export const Tabla = () => {
  return (
    <ContainerTabla>
      <InputTabla label="Fecha" type="string" />
      <InputTabla label="Categoria" type="string" />
      <InputTabla label="Descripcion" type="string" />
      <InputTabla label="Monto" type="string" />
      <InputTabla label="Completado" type="string" />
      <InputTabla label="Real" type="string" />
      <InputTabla label="Proyeccion" type="string" />
    </ContainerTabla>
  );
};

import { Registros } from "../../_mockup_/tabla/Registros";
import {
  ContainerTabla,
  Tr,
  Td,
  H1,
  RedirectHome,
  TdTitle,
} from "./Tabla.stiled";
import { useNavigate } from "react-router-dom";
export const Tabla = () => {
  const navigate = useNavigate();

  return (
    <ContainerTabla>
      <H1>Tabla de Registros</H1>
      <Tr>
        <TdTitle>category</TdTitle>
        <TdTitle>Descripcion</TdTitle>
        <TdTitle>Monto</TdTitle>
        <TdTitle>Completado</TdTitle>
        <TdTitle>Real</TdTitle>
        <TdTitle>Proyeccion</TdTitle>
        {Registros.map((ele) => {
          return (<div>
            <td>
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

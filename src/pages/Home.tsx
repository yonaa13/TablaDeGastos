import { Tabla } from "../Components/Tabla/Tabla";
import { ContainerBoard, H1, Tr, Td } from "./Home.styled";
export const Home = () => {
  return (
    <ContainerBoard>
      <Tabla/>
      <H1>Tabla de gastos</H1>
      <Tr>
        <Td>Fecha</Td>
        <Td>Categoria</Td>
        <Td>Descripcion</Td>
        <Td>Monto</Td>
        <Td>Completado</Td>
        <Td>Real</Td>
        <Td>Proyeccion</Td>
      </Tr>
    </ContainerBoard>
  );
};

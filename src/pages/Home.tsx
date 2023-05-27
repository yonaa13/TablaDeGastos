import { User } from "../mockup/mockup";
import { InputCustom } from "../Components/inputCustom/InputCustom";
import { ButtomCustom } from "../Components/buttomCustom/ButtomCustom";
import { Container, ContainerWelcome, H1 } from "./Home.styled";
import { FiCoffee, FiActivity } from "react-icons/fi";
export const Home = () => {
  const { name, lastName } = User;
  return (
    <Container>
      <ContainerWelcome>
        <FiCoffee />
        <H1>
          Welcome {name} {lastName}
        </H1>
      </ContainerWelcome>
      <InputCustom type="text" width="250px" />
      <ButtomCustom label="Bienvenido" icon={<FiActivity />} />
    </Container>
  );
};

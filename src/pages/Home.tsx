import { User } from "../mockup/mockup";
import { InputCustom } from "../Components/inputCustom/InputCustom";
import { Container,ContainerWelcome, H1 } from "./Home.styled";
import { FiCoffee } from "react-icons/fi";
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
      <InputCustom type="text" width="100px"/>
    </Container>
  );
};

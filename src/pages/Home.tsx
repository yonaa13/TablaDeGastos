import { User } from "../mockup/mockup";
import { Container, H1 } from "./Home.styled";
import { FiCoffee } from "react-icons/fi";
export const Home = () => {
  const { name, lastName } = User;
  return (
    <Container>
      <FiCoffee />
      <H1>
        Welcome {name} {lastName}
      </H1>
    </Container>
  );
};

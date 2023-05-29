
import { User } from "../mockup/mockup";
import { InputCustom } from "../Components/inputCustom/InputCustom";
import { ButtomCustom } from "../Components/buttomCustom/ButtomCustom";
//import { Loader } from "../Components/loader/Loader";
import { Modal } from "../Components/modal/Modal";
import { SelectCustom } from "../Components/selectCustom/SelectCustom";
import { Container, ContainerWelcome, H1 } from "./Home.styled";
import { FiCoffee, FiActivity } from "react-icons/fi";
import { useState } from "react";

export const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const { name, lastName } = User;
  //<Loader/>
  const getModal = () => {
    if (isActive) {
      return <Modal isActive />;
    }
  };
  return (
    <Container>
      <SelectCustom/>
      <ContainerWelcome
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <FiCoffee />
        {getModal()}
        <H1>
          Welcome {name} {lastName}
        </H1>
      </ContainerWelcome>
      <InputCustom type="text" width="250px" placeholder="Introducir algo" />
      <ButtomCustom label="Bienvenido" icon={<FiActivity />} />
    </Container>
  );
};

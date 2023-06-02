import { useState } from "react";
import { User } from "../../mockup/mockup";
import { InputCustom } from "../../components/inputCustom/InputCustom";
import { ButtomCustom } from "../../components/buttomCustom/ButtomCustom";
//import { Loader } from "../Components/loader/Loader";
import { Modal } from "../../components/modal/Modal";
import { SelectCustom } from "../../components/selectCustom/SelectCustom";
import {
  Container,
  ContainerWelcome,
  OpenModal,
  CloseModal,
  ContainerModal,
  H1,
  ContainerHome,
} from "./Home.styled";
import { FiCoffee, FiActivity } from "react-icons/fi";

export const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { name, lastName } = User;
  //<Loader/>
  const getModal = () => (isActive ? <Modal /> : null);

  return (
    <Container>
      {getModal()}
      <ContainerModal>
        <OpenModal
          onClick={() => {
            setIsActive(true);
          }}
        >
          AbrirModal
        </OpenModal>
        <CloseModal onClick={() => setIsActive(false)}>Cerra Modal</CloseModal>
      </ContainerModal>
      <ContainerHome isActive={isActive}>
        <ContainerWelcome>
          <SelectCustom />
          <FiCoffee />
          <H1>
            Welcome {name} {lastName}
          </H1>
        </ContainerWelcome>
        <InputCustom type="text" width="200px" placeholder="Introducir algo" />
        <ButtomCustom label="Bienvenido" icon={<FiActivity />} />
      </ContainerHome>
    </Container>
  );
};

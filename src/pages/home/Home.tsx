import { useState, useEffect } from "react";
import { User } from "../../_mockup_/mockup";
import { InputCustom } from "../../components/inputCustom/InputCustom";
import { ButtomCustom } from "../../components/buttomCustom/ButtomCustom";
import { Loader } from "../../components/loader/Loader";
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
  const [count, setCount] = useState(0);
  const { name, lastName } = User;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 5000);
    if (count == 1) {
      return () => clearTimeout(timer);
    }
  }, []);

  const loadingComponent = () => {
    if (count == 0) {
      return <Loader />;
    }
  };
  return (
    <Container>
      {loadingComponent()}
      {isActive && <Modal/>}
      <ContainerModal>
        <OpenModal
          onClick={() => {
            setIsActive(true);
          }}
        >
          AbrirModal
        </OpenModal>
        <CloseModal
          onClick={() => {
            setIsActive(false);
          }}
        >
          Cerra Modal
        </CloseModal>
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

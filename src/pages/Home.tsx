import { useState} from 'react'
import { User } from "../mockup/mockup";
import { InputCustom } from "../components/inputCustom/InputCustom";
import { ButtomCustom } from "../components/buttomCustom/ButtomCustom";
//import { Loader } from "../Components/loader/Loader";
import { Modal } from "../components/modal/Modal";
import { SelectCustom } from "../components/selectCustom/SelectCustom";
import { Container, ContainerWelcome, H1 } from "./Home.styled";
import { FiCoffee, FiActivity } from "react-icons/fi";



export const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const { name, lastName } = User;
  //<Loader/>
  const getModal = () => {
    if (isActive) {
      return <Modal/>;
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
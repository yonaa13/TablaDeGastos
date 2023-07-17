import { ButtomCustom } from "../../components/buttomCustom/ButtomCustom";
import { useNavigate } from "react-router-dom";
import { ContainerLogin, Redirect } from "./Logint.stiled";
export const Login = () => {
  const navigate = useNavigate();
  return (
    <ContainerLogin>
      <Redirect onClick={() => navigate("/home")}>
        <ButtomCustom label="Home" width="150px"/>
      </Redirect>
    </ContainerLogin>
  );
};

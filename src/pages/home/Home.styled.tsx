import styled from "styled-components";
import { HomeProps } from "./Home.interface";
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d6640;
  padding: 0;
`;
export const ContainerModal = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 40px;
`;
export const ContainerHome = styled.div<HomeProps>`
  opacity: ${({ isActive }) => (isActive ? "0.3" : "1")};
`;
export const OpenModal = styled.h1`
  padding-top: 70px;
  color: #fff;
  font-size: 1rem;
  padding-left: 15px;
`;
export const CloseModal = styled(OpenModal)`
  padding-left: 0px;
  padding-right: 15px;
`;
export const ContainerWelcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
  svg {
    font-size: 3rem;
  }
`;
export const H1 = styled.h1`
  font-size: 2rem;
`;
export const RedirectLogin = styled.h1`
  position: absolute;
  right: 12px;
  bottom: 12px;
  @media (max-width: 720px) {
    width: 10%;
    right: 140px;
  }
`;
export const RedirectTabla = styled.h1`
  position: absolute;
  left: 12px;
  bottom: 12px;
  @media (max-width: 720px) {
    width: 10%;
    left: 0%;
  }
`;

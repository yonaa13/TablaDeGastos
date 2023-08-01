import styled from "styled-components";
import { PropsNavBar } from "./NavBar.interface";
export const ContainerNavBar = styled.div<PropsNavBar>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  top: 0;
  width: 100%;
  background-color: #179b59;
  height: 58px;
  gap: 55px;
  color: white;
  border-bottom: 3px solid grey;
  padding-left: 12px;
  svg {
    inline-size: 1.3rem;
    color: red;
    transform: rotate(${({ isActive }) => (isActive ? "180deg" : "")});
  }
  @media (max-width: 720px) {
    justify-content: space-evenly;
  }
  @media (max-width: 490px) {
    justify-content: start;
  }
`;
export const ContainerIcon = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  @media (max-width: 720px) {
    display: block;
  }
`;
export const Ul = styled.ul<PropsNavBar>`
  display: flex;
  gap: 30px;
  @media (max-width: 720px) {
    position: absolute;
    left: ${({ isActiveIcon }) => (isActiveIcon ? "0%" : "-100%")};
    flex-direction: column;
    align-items: center;
    justify-content: start;
    top: 58px;
    gap: 10px;
    z-index: 10000;
    background-color: #179b59;
    width: 50%;
    height: 90vh;
    border-radius: 10px;
    transition: left 1s;
  }
`;
export const Li = styled.li`
  position: relative;
  display: flex;
  list-style: none;
  text-decoration: none;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 720px) {
    padding-top: 32px;
  }
`;
export const SubUl = styled.ul<PropsNavBar>`
  position: absolute;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  z-index: 1000;
  background-color: #179b59;
  width: 160px;
  margin-top: 170px;
  box-shadow: 8px 2px 5px black;
  @media (max-width: 720px) {
    display: ${({ isActive }) => (isActive ? "flex" : "none")};
    justify-content: space-around;
    flex-direction: column;
    background-color: #179b59;
    box-shadow: none;
    width: 160px;
    height: 300px;
    margin-top: 350px;
  }
`;
export const LiUser = styled(Li)<PropsNavBar>`
  position: absolute;
  right: 13px;
  top: 17px;
  @media (max-width: 720px) {
    position: relative;
    left: 0px;
    padding-top: ${({ isActive }) => (isActive ? "300px" : "0px")};
  }
`;

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
    display: ${({ isActiveIcon }) => (isActiveIcon ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
    right: 0px;
    top: 58px;
    z-index: 10000;
    background-color: #179b59;
    width: 150px;
    height: 130px;
    border-radius: 10px;
    svg {
      display: none;
    }
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
    border-radius: 10px;
    margin-top: 150px;
    right:-30px;
  }
`;
export const LiUser = styled(Li)`
  position: absolute;
  right: 13px;
  @media (max-width: 720px) {
    position: absolute;
    display: block;
  }
`;

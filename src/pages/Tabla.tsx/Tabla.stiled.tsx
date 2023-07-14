import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d6640;
  padding: 0;
  color: #fff;
`;
export const ContainerLista = styled.div`
  display: flex;
  width: 90%;
  min-width: 480px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid grey;
  border-radius: 50px;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 22px;
  svg{
    color: #30a8c6;
    font-size: 30px;
    cursor: pointer;
  }
`;
export const RedirectHome = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  height: min-content;
  padding-right: 12px;
  padding-top: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: bolder;
  }
  @media (max-width: 720px) {
    position: absolute;
    top: 12px;
    right: 28px;
  }
`;

export const ContainerIcons = styled.div`
  width: 14%;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
  svg {
    inline-size: 1.7rem;
    font-size: 1.5rem;
    padding: 0px 3px;
    color: #1b134e;
  }
`;

export const ContainerLabel = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding-left: 4px;
  @media (max-width: 720px) {
    width: 350px;
  }
`;
export const Label = styled.label`
  width: 200px;
  display: flex;
  font-size: 1.2rem;
  color: #fff;
`;
export const LabelMonto = styled(Label)`
  color:black;
  font-weight: 900;
`;
export const ContainerIconsDelete = styled(ContainerIcons)`
   width: auto;
`;

export const ContainerModal = styled.div`
   position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 200px;
  margin-top: 12px;
  background-color: #0c8a2e;
  border-radius: 50px;
  z-index: 1000;
  color: #fff;
  font-size: 3rem;
`;
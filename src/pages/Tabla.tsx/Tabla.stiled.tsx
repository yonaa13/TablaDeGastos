import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d6640;
  padding: 0;
  color: #fff;
  overflow: hidden;
`;
export const ContainerLista = styled.div`
  display: flex;
  width: 90%;
  min-width: 480px;
  height: 40px;
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
  svg {
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
`;

export const ContainerIcons = styled.div`
  width: 10%;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
    padding: 0px 3px;
    color: #1b134e;
    @media (max-width: 720px) {
      font-size: 1rem;
      padding: 0px;
    }
  }
  @media (max-width: 720px) {
    padding: 0px svg {
      font-size: 1rem;
      padding: 0px;
    }
  }
`;

export const ContainerLabel = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;
export const Label = styled.label`
  display: flex;
  font-size: 0.9rem;
  color: #fff;
  @media (max-width: 720px) {
    width: 60px;
  }
`;
export const LabelMonto = styled(Label)`
  color: black;
  font-weight: 900;
  @media (max-width: 520px) {
    width: 70px;
  }
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

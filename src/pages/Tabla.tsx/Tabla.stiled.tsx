import styled from "styled-components";

export const ContainerTabla = styled.div`
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
export const Tr = styled.tr`
  border: 1px solid black;
`;
export const Td = styled.td`
  border: 1px solid black;
  padding: 12px;
  width: 150px;
  min-width: 90px;
`;
export const H1 = styled.h1`
  position: absolute;
  top: 10%;
`;
export const RedirectHome = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: bolder;
  }
`;
export const TdTitle = styled(Td)`
  color: #000000;
  background-color: #64856f;
  font-weight: bold;
`;

import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  left: 14%;
  top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 400px;
  font-size: 1rem;
  z-index: 10000;
`;
export const ContainerCategory = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 52px;
  font-size: 1.3rem;
  gap: 23px;
  border-radius: 50px;
  background-color: #952727;
  box-sizing: border-box;
`;
export const Span = styled.span`
  padding-left: 12px;
  color: #a8a1a1;
`;

export const IconClose = styled.div`
  position: absolute;
  right: 22px;
  top: 22px;
`;

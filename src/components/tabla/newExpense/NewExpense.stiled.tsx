import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a549a;
  z-index: 100000;
  font-size: 1rem;
  padding: 40px;
  border-radius: 50px;
  max-width: 500px;
  color: white;
`;
export const H1 = styled.h1`
  padding-bottom: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  animation: text 3s;
  color: #690505f3;
  @keyframes text {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CloseModalGasttos = styled.div`
  position: absolute;
  display: flex;
  right: 32px;
  top: 30px;
  color: black;
  font-size: 1.3rem;
  width: max-content;
  border: 1px solid black;
  border-radius: 50px;
  padding: 1px;
`;
export const SaveExpense = styled.div`
 
`;

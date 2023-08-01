import styled from "styled-components";

export const ContainerExpense = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0e7d8c;
  width: 70%;
  height: 400px;
  font-size: 1rem;
  z-index: 10000;
  border-radius: 20px;
  max-width: 500px;
  overflow: hidden;
`;
export const ContainerModalUpdate = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
`;
export const IconClose = styled.div`
  position: absolute;
  right: 18px;
  top: 15px;
  color: red;
  padding: 2px;
  padding-bottom: 0px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const H3 = styled.h3`
  color: #fff;
  padding-top: 30px;
  font-size: 1.4rem;
  color: #1bc372;
  animation-duration: 2s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

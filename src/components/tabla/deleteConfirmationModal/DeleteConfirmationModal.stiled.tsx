import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  top: 0;
  width: 50%;
  height: 200px;
  font-size: 1rem;
  z-index: 10000;
  max-width: 600px;
  min-width: 300px;
  background-image: radial-gradient(
    circle at 39.79% 21.96%,
    #def880 0,
    #cbf67f 12.5%,
    #b2f07c 25%,
    #93e675 37.5%,
    #6cd86c 50%,
    #38ca65 62.5%,
    #00bf64 75%,
    #00b869 87.5%,
    #00b472 100%
  );
  border-radius: 10px 50px;
`;
export const P = styled.p`
  font-size: 1.2rem;
  font-weight:bold ;
  color: black;

`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #746E6D;
  cursor: pointer;
  :hover{
   color: red;
  }
`;
export const IconClose = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  top: 20px;
  color: black;
  font-size: 1.3rem;
  width: max-content;
  border: 1px solid black;
  border-radius: 50px;
  padding: 1px;
  :hover{
   color: red;
  }
`;

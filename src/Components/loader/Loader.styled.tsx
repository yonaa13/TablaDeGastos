import styled,{keyframes} from "styled-components";
import { LoaderProps } from "./Loader.interface";
export const Loading = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 12px;
  font-size:3rem;
`;
export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`

export const Dot = styled.div<LoaderProps>`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({delay})=>delay};
`
export const Pointer = styled.div`
   display: flex;
  align-items: flex-end;
  justify-content: center;
`

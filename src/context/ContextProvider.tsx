import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { Registros } from "../_mockup_/tabla/Registros";
import { RegistrosProps } from "../interfaces/RegistrosProps";
export const ContextProvider = ({ children }: any) => {
  const [registrosContext, setRegistrosContext] = useState<RegistrosProps[]>(Registros);

  return (
    <GlobalContext.Provider
      value={{
        registrosContext,
        setRegistrosContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

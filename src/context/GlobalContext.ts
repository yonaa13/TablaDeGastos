import { createContext, useContext } from 'react'
import { GlobalContent } from './Types'

export const GlobalContext = createContext<GlobalContent>({
    registrosContext: [],
  setRegistrosContext: () => {},
  
})

export const useGlobalContext = () => useContext(GlobalContext)

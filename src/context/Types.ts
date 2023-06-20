import { RegistrosProps } from "../interfaces/RegistrosProps"
export type GlobalContent = {
  setRegistrosContext: (categories: RegistrosProps[]) => void
  registrosContext: RegistrosProps[],
}
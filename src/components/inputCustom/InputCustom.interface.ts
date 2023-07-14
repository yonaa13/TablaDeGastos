import { Dispatch, SetStateAction } from "react"
export interface Props{
    type?: string
    width?:string
    placeholder?:string
    value?: string | number
    setValue: Dispatch<SetStateAction<string | number>> | ((value: string | number)=> void)
 }
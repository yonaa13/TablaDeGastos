import { Dispatch, SetStateAction } from "react"
export interface Props{
    type?: string
    width?:string
    placeholder?:string
    value?: string | number
    label?:string
    setValue: Dispatch<SetStateAction<string | number>> | ((value: string | number)=> void)
}
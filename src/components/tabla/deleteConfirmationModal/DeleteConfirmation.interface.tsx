import { Dispatch, SetStateAction } from "react"

export interface PropsDeleteConfirmation{
    id:string
    closeDeleteConfiramation: Dispatch<SetStateAction<boolean>>
}
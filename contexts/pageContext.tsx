import { createContext, Dispatch, SetStateAction } from "react"

export const pageContext = createContext<[string | null , Dispatch<SetStateAction<string>> | null]>([null, null]);
"use client"
import { pageContext } from "@/contexts/pageContext"
import {lista, map} from "@/utils/calculadoras"
import { useContext } from "react"

export default function Page() {
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Calculadoras")
    }
    return (
        <ul className="grid grid-cols-4 gap-4">
            {lista.map((item) => (
                        <li key={item}>
                            <a href={map.get(item)?.href} className="flex flex-col items-center justify-center text-center rounded-xl md:text-xl bg-cyan-100 p-4 h-[150px]">
                            <img src={map.get(item)?.img} width={50} height={50} alt={item} />
                            {item}
                            </a>
                        </li>))}
        </ul>
         
    )
    
}
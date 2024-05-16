"use client"
import { useContext } from "react"
import { pageContext } from "@/contexts/pageContext"

export default function Page() {
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Metalurgia e Materiais")
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <a href={"http://localhost:3000/auth/metalurgia/calculadoras"} className="flex flex-col items-center justify-center rounded-xl bg-cyan-100 p-4">
                            <img src="/calculator.svg" width={50} height={50} alt="Calculadoras" />
                            Calculadoras
                            </a>
        </div>
    )
}
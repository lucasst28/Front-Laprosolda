"use client";

import "./contracao.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

export default function Page() {
    const [area, setArea] = useState<number> (0);
    const [espessura, setEspessura] = useState<number> (0);
    const [abertura, setAbertura] = useState<number> (0);
    const [calculated, setCalculated] = useState<boolean> (false);
    const [result, setResult] = useState<number> (0);
    
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Distorção Transversal em Juntas")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(0.8 * (area/espessura) + 0.05*abertura);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="area">Área da seção transversal da solda [mm²]</label>
                    <input id="area" type="number"
                        value={area}
                        onChange={(e) => setArea(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="espessura">Espessura das chapas [mm]</label>
                    <input id="espessura" type="number"
                        value={espessura}
                        onChange={(e) => setEspessura(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="abertura">Abertura da raiz do chanfro [mm]</label>
                    <input id="abertura" type="number"
                        value={abertura}
                        onChange={(e) => setAbertura(parseFloat(e.target?.value))}/>
                </div>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} mm</span></p>
                    </div>
                </>
                
            }
        </div>
    )
}
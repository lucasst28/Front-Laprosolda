"use client";

import "./contr.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

export default function Page() {
    const [corrente, setCorrente] = useState<number> (0);
    const [comprimento, setComprimento] = useState<number> (0);
    const [espessura, setEspessura] = useState<number> (0);
    const [calculated, setCalculated] = useState<boolean> (false);
    const [result, setResult] = useState<number> (0);
    
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Distorção Longitudinal em Juntas de Topo")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult((3.05 * corrente * comprimento) / espessura * Math.pow(10, -5));
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="espessura">Espessura das Chapas [mm]</label>
                    <input id="espessura" type="number"
                        value={espessura}
                        onChange={(e) => setEspessura(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="current">Corrente [A]</label>
                    <input id="current" type="number"
                        value={corrente}
                        onChange={(e) => setCorrente(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="comprimento">Comprimento da Solda [m]
                    </label>
                    <input id="comprimento" type="number"
                        value={comprimento}
                        onChange={(e) => setComprimento(parseFloat(e.target?.value))}/>
                </div>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)}</span></p>
                    </div>
                </>
                
            }
        </div>
    )
}
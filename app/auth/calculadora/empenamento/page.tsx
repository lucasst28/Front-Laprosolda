"use client";

import "./empenamento.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

export default function Page() {
    const [secTransversal, setSectransversal] = useState<number> (0);
    const [distancia, setDistancia] = useState<number> (0);
    const [comprimento, setComprimento] = useState<number> (0);
    const [momento, setMomento] = useState<number> (0);
    const [calculated, setCalculated] = useState<boolean> (false);
    const [result, setResult] = useState<number> (0);
    
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Empenamento")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(0.005 * secTransversal * distancia * comprimento * comprimento / momento);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="secTransversal">Área da seção transversal da solda [mm^2]</label>
                    <input id="secTransversal" type="number"
                        value={secTransversal}
                        onChange={(e) => setSectransversal(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="distancia">Distância do centro de gravidade da(s) solda(s) [mm]</label>
                    <input id="distancia" type="number"
                        value={distancia}
                        onChange={(e) => setDistancia(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="comprimento">Comprimento da Solda [mm] </label>
                    <input id="comprimento" type="number"
                        value={comprimento}
                        onChange={(e) => setComprimento(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="momento">Momento de Inércia do Membro [mm²]</label>
                    <input id="momento" type="number"
                        value={momento}
                        onChange={(e) => setMomento(parseFloat(e.target?.value))}/>
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
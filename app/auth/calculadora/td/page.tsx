"use client";

import "./td.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
import Link from "next/link";

function TD1() {
    const [massaI, setMassaI] = useState<number>(0);
    const [massaF, setMassaF] = useState<number>(0);
    const [tempo, setTempo] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const handleCalculate = () => {
        setCalculated(true);
        setResult(3.6 * (massaF - massaI) / tempo);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="massaI">Massa inicial da junta antes da soldagem [g]</label>
                    <input id="massaI" type="number"
                        value={massaI}
                        onChange={(e) => setMassaI(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="massaF">Massa final da junta após a soldagem [g]</label>
                    <input id="massaF" type="number"
                        value={massaF}
                        onChange={(e) => setMassaF(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="tempo">Tempo [s]</label>
                    <input id="tempo" type="number"
                        value={tempo}
                        onChange={(e) => setTempo(parseFloat(e.target?.value))} />
                </div>
            </div>
            <div className="mt-3">
                <p className="text-white">Para mais informações clique <Link className="underline" href="/auth/info/td">aqui</Link></p>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row dark rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} [kg/h]</span></p>
                    </div>
                </>

            }
        </div>
    )
}


function TD2() {
    const [As, setAs] = useState<number>(0);
    const [de, setde] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const handleCalculate = () => {
        setCalculated(true);
        setResult(4 * As / (Math.PI * de * de));
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="As">As</label>
                    <input id="As" type="number"
                        value={As}
                        onChange={(e) => setAs(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="de">de</label>
                    <input id="de" type="number"
                        value={de}
                        onChange={(e) => setde(parseFloat(e.target?.value))} />
                </div>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row dark rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} [g/s]</span></p>
                    </div>
                </>

            }
        </div>
    )
}

// TODO: Formula com densidade e comprimento
// TODO: Adicionar unidades

export default function Page() {
    const [PagComp, setPagComp] = useState<any>(<TD1 />);
    const [pag, setPage] = useState<number>(0);
    const [pageTitle, setPageTitle] = useContext(pageContext)

    if (setPageTitle !== null) {
        setPageTitle("Taxa de Deposição")
    }

    const handleTD1 = () => {
        setPage(0);
        setPagComp(<TD1 />)
    }
    const handleTD2 = () => {
        setPage(1);
        setPagComp(<TD2 />)
    }

    return (
        <div>
            {pag !== 0 && <button className="p-1 bg-[#3D5158] text-white rounded-sm" onClick={handleTD1}>Equação 1</button>}
            {pag !== 1 && <button className="p-1 bg-[#3D5158] text-white rounded-sm" onClick={handleTD2}>Equação 2</button>}
            {PagComp}
        </div>
    )

}

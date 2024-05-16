"use client";

import "./rd.css"
import { useState } from "react"
import Link from "next/link";

export default function Page() {
    const [depositionRate, setDepositionRate] = useState<number>(0);
    const [fusionRate, setFusionRate] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const handleCalculate = () => {
        setCalculated(true);
        setResult(depositionRate / fusionRate * 100);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="deposition">Taxa de Deposição [kg/h]</label>
                    <input id="deposition" type="number"
                        value={depositionRate}
                        onChange={(e) => setDepositionRate(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="fusion">Taxa de Fusão [kg/h]</label>
                    <input id="fusion" type="number"
                        value={fusionRate}
                        onChange={(e) => setFusionRate(parseFloat(e.target?.value))} />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-white">Para mais informações clique <Link className="underline" href="/auth/info/rd">aqui</Link></p>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} %</span></p>

                    </div>
                </>

            }
        </div>
    )
}

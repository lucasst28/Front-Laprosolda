"use client";

import "./at.css"
import { ChangeEvent, useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

import { RTMap } from "@/utils/rendimentost";

import Link from "next/link";

export default function Page() {
    const [tension, setTension] = useState<number>(0);
    const [current, setCurrent] = useState<number>(0);
    const [speed, setSpeed] = useState<number>(0);
    const [rendTerm, setRendTerm] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Aporte Térmico")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(rendTerm * tension * current / speed);
    }

    const setEta = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(RTMap.get(e.target.value))
    }

    // TODO: Tipo 1 e  tipo 2

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="tension">Tensão[V]</label>
                    <input id="tension" type="number"
                        value={tension}
                        onChange={(e) => setTension(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="current">Corrente [A]</label>
                    <input id="current" type="number"
                        value={current}
                        onChange={(e) => setCurrent(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="speed">Velocidade de Soldagem [m/s]</label>
                    <input id="speed" type="number"
                        value={speed}
                        onChange={(e) => setSpeed(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="termic">Rendimento Térmico </label>
                    <div className="flex flex-col w-1/2">
                        <select className="rounded-md p-1 mb-2 w-1/3" onChange={setEta}>
                            {Array.from(RTMap.keys()).map(val =>
                                <option value={val}>{val}</option>
                            )}
                        </select>
                        <input className="!w-full" id="termic" type="number"
                            value={rendTerm}
                            onChange={(e) => setRendTerm(parseFloat(e.target?.value))} />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p className="text-white">Para mais informações clique <Link href="/auth/info/at" className="underline">aqui</Link></p>
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

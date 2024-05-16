"use client";

import "./bruscato.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext"
import { acosC, tabelaDeValores } from "@/utils/materiais";
import { ChangeEvent } from "react";
import Link from "next/link";

export default function Page() {
    const [as, setAs] = useState<number>(0);
    const [sb, setSb] = useState<number>(0);
    const [p, setP] = useState<number>(0);
    const [sn, setSn] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Bruscato")
    }

    let materiais: string[] = ["Selecionar Material"];
    materiais.push(...acosC)

    const handleCalculate = () => {
        setCalculated(true);
        setResult((10 * p + 5 * sb + 4 * sn + as) / 100);
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const elem = tabelaDeValores.get(e.target.value)!
        setP(elem["%P"])
    }

    // TODO: Olhar se o input realmente é em % porque não tá fazendo sentido

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="bg-gray-400 rounded-t-md flex flex-row p-2 w-1/2 justify-end">
                    <select onChange={handleChange} className="rounded-md p-1 bg-gray-200">
                        {materiais.map((mat) => <option value={mat}>{mat}</option>)}
                    </select>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="sb">Sb [%]</label>
                    <input id="sb" type="number"
                        value={sb}
                        onChange={(e) => setSb(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="as">As [%]</label>
                    <input id="as" type="number"
                        value={as}
                        onChange={(e) => setAs(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="p">P [%]</label>
                    <input id="p" type="number"
                        value={p}
                        onChange={(e) => setP(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="sn">Sn [%]</label>
                    <input id="sn" type="number"
                        value={sn}
                        onChange={(e) => setSn(parseFloat(e.target?.value))} />
                </div>
            </div>
            <div className="mt-3">
                <p className="text-white">Para mais informações clique <Link className="underline" href="/auth/info/bruscato">aqui</Link></p>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">Fator X: {result.toFixed(2)}</span>
                            <span className={`ml-4 rounded-sm text-white p-2 ${result < 15 ? "bg-green-500" : "bg-red-500"}`}>{result < 15 ? "Resistente à fragilização do revenido" : "Suscetível a fragilização do revenido"}</span></p>
                    </div>
                </>

            }
        </div>
    )
}

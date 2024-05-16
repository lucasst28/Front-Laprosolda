"use client";

import "./sugiyama.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
import { acosC, tabelaDeValores } from "@/utils/materiais";
import { ChangeEvent } from "react";
import Link from "next/link";

export default function Page() {
    const [as, setAs] = useState<number>(0);
    const [sb, setSb] = useState<number>(0);
    const [p, setP] = useState<number>(0);
    const [sn, setSn] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [mn, setMn] = useState<number>(0);
    const [cr, setCr] = useState<number>(0);
    const [si, setSi] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    let materiais: string[] = ["Selecionar Material"];
    materiais.push(...acosC)

    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Sugiyama")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(c + mn + cr / 3 + si / 4 + 3.5 * (10 * p + 5 * sb + 4 * sn + as));
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const elem = tabelaDeValores.get(e.target.value)!
        setC(elem["%C"]);
        setSi(elem["%Si"]);
        setMn(elem["%Mn"]);
        setCr(elem["%Cr"]);
        setP(elem["%P"])
    }

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
                <div className="table-row rounded-t-sm">
                    <label htmlFor="c">C [%]</label>
                    <input id="c" type="number"
                        value={c}
                        onChange={(e) => setC(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="mn">Mn [%]</label>
                    <input id="mn" type="number"
                        value={mn}
                        onChange={(e) => setMn(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="cr">Cr [%]</label>
                    <input id="cr" type="number"
                        value={cr}
                        onChange={(e) => setCr(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="si">Si [%]</label>
                    <input id="si" type="number"
                        value={si}
                        onChange={(e) => setSi(parseFloat(e.target?.value))} />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-white">Para mais informações clique <Link href="/auth/info/sugiyama" className="underline">aqui</Link></p>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">Fator PE: {result.toFixed(2)}</span>
                            <span className={`text-white ml-4 p-2 ${result < 3 ? "bg-green-500" : "bg-red-500"}`}>{result < 3 ? "Boa resistência à fragilização do revenido" : "Suscetível à fragilização do revenido"}</span></p>
                    </div>
                </>

            }
        </div>
    )
}

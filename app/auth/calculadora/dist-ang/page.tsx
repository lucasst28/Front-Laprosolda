"use client";

import "./dist.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

export default function Page() {
    const [a, setA] = useState<number> (0);
    const [alinha, setAlinha] = useState<number> (0);
    const [b, setB] = useState<number> (0);
    const [blinha, setBlinha] = useState<number> (0);
    const [c, setC] = useState<number> (0);
    const [clinha, setClinha] = useState<number> (0);
    const [d, setD] = useState<number> (0);
    const [dlinha, setDlinha] = useState<number> (0);
    const [h, setH] = useState<number> (0);
    const [result, setResult] = useState<number> (0);
    const [calculated, setCalculated] = useState<boolean> (false);

    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Distorção Angular")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(1/(2 * h) * ((a*alinha + d*dlinha) - (b*blinha + c*clinha)));
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="a">A</label>
                    <input id="a" type="number"
                        value={a}
                        onChange={(e) => setA(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="alinha">A'</label>
                    <input id="alinha" type="number"
                        value={alinha}
                        onChange={(e) => setAlinha(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="d">D</label>
                    <input id="d" type="number"
                        value={d}
                        onChange={(e) => setD(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="dlinha">D'</label>
                    <input id="dlinha" type="number"
                        value={dlinha}
                        onChange={(e) => setDlinha(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="b">B</label>
                    <input id="b" type="number"
                        value={b}
                        onChange={(e) => setB(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="blinha">B'</label>
                    <input id="blinha" type="number"
                        value={blinha}
                        onChange={(e) => setBlinha(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="c">C</label>
                    <input id="c" type="number"
                        value={c}
                        onChange={(e) => setC(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="clinha">C'</label>
                    <input id="clinha" type="number"
                        value={clinha}
                        onChange={(e) => setClinha(parseFloat(e.target?.value))}/>
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="h">h</label>
                    <input id="h" type="number"
                        value={h}
                        onChange={(e) => setH(parseFloat(e.target?.value))}/>
                </div>
            </div>
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>
            {
                calculated &&
                <>
                    <div className="table-row rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} rad</span></p>
                    </div>
                </>
                
            }
        </div>
    )
}
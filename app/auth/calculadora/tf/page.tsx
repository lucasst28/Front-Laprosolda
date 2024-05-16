"use client";

import "./tf.css"
import { useState } from "react"
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
import Link from "next/link";

function MaisInfo() {
    return (
        <div className="mt-4">
            <p className="text-white">Para mais informações clique <Link href="/auth/info/tf" className="underline">aqui</Link></p>
        </div>
    )
}

function Massa() {
    const [massaI, setMassaI] = useState<number>(0);
    const [massaF, setMassaF] = useState<number>(0);
    const [tempo, setTempo] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const [_pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Taxa de Fusão")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult((massaI - massaF) / tempo);
    }

    return (
        <div className="text-white flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="massaI">Massa inicial do eletrodo</label>
                    <input id="massaI" type="number"
                        value={massaI}
                        onChange={(e) => setMassaI(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="massaF">Massa final do eletrodo</label>
                    <input id="massaF" type="number"
                        value={massaF}
                        onChange={(e) => setMassaF(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="tempo">Tempo</label>
                    <input id="tempo" type="number"
                        value={tempo}
                        onChange={(e) => setTempo(parseFloat(e.target?.value))} />
                </div>
            </div>
            <MaisInfo />
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


function Comprimento() {
    const [compI, setCompI] = useState<number>(0);
    const [compF, setCompF] = useState<number>(0);
    const [tempo, setTempo] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const [_pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Taxa de Fusão")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult((compI - compF) / tempo);
    }

    return (
        <div className="text-white flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="compI">Comprimento inicial do eletrodo</label>
                    <input id="compI" type="number"
                        value={compI}
                        onChange={(e) => setCompI(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="compF">Comprimento final do eletrodo</label>
                    <input id="compF" type="number"
                        value={compF}
                        onChange={(e) => setCompF(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="tempo">Tempo</label>
                    <input id="tempo" type="number"
                        value={tempo}
                        onChange={(e) => setTempo(parseFloat(e.target?.value))} />
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

function Corrente() {
    const [corrente, setCorrente] = useState<number>(0);
    const [comprimento, setComprimento] = useState<number>(0);
    const [alfa, setAlfa] = useState<number>(0);
    const [beta, setBeta] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const [_pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Taxa de Fusão")
    }

    const handleCalculate = () => {
        setCalculated(true);
        setResult(alfa * corrente + beta * comprimento * corrente * corrente);
    }

    return (
        <div className="text-white flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="corrente">Corrente de Soldagem</label>
                    <input id="corrente" type="number"
                        value={corrente}
                        onChange={(e) => setCorrente(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="comprimento">Comprimento energizado do eletrodo</label>
                    <input id="copmrimento" type="number"
                        value={comprimento}
                        onChange={(e) => setComprimento(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="alfa">Alfa</label>
                    <input id="alfa" type="number"
                        value={alfa}
                        onChange={(e) => setAlfa(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="beta">Beta</label>
                    <input id="beta" type="number"
                        value={beta}
                        onChange={(e) => setBeta(parseFloat(e.target?.value))} />
                </div>
            </div>
            <MaisInfo />
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


function Densidade() {
    const [densidade, setDensidade] = useState<number>(0);
    const [comprimento, setComprimento] = useState<number>(0);
    const [tempo, setTempo] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    const handleCalculate = () => {
        setCalculated(true);
        setResult(3.6 * densidade * comprimento / tempo);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="densidade">Densidade linear do arame [g/m]</label>
                    <input id="densidade" type="number"
                        value={densidade}
                        onChange={(e) => setDensidade(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="comprimento">Comprimento do arame consumido [m]</label>
                    <input id="comprimento" type="number"
                        value={comprimento}
                        onChange={(e) => setComprimento(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="tempo">Tempo de soldagem [s]</label>
                    <input id="tempo" type="number"
                        value={tempo}
                        onChange={(e) => setTempo(parseFloat(e.target?.value))} />
                </div>
            </div>
            <MaisInfo />
            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>

            {
                calculated &&
                <>
                    <div className="table-row dark rounded-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} [Kg/h]</span></p>
                    </div>
                </>

            }
        </div>
    )
}

export default function Page() {
    const [PagComp, setPagComp] = useState<any>(<Massa />);
    const [pag, setPage] = useState<number>(0);
    const handleMassa = () => {
        setPage(0);
        setPagComp(<Massa />)
    }
    const handleCorrente = () => {
        setPage(2);
        setPagComp(<Corrente />)
    }
    const handleComprimento = () => {
        setPage(1);
        setPagComp(<Comprimento />)
    }

    const handleDensidade = () => {
        setPage(3);
        setPagComp(<Densidade />)
    }
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-left">
                {pag !== 0 && <button className="bg-[#3D5158] p-2 text-white mb-4 rounded-sm" onClick={handleMassa}>Massa</button>}
                {pag !== 1 && <button className="bg-[#3D5158] p-2 text-white mb-4 rounded-sm" onClick={handleComprimento}>Comprimento</button>}
                {pag !== 2 && <button className="bg-[#3D5158] p-2 text-white mb-4 rounded-sm" onClick={handleCorrente}>Corrente</button>}
                {pag !== 3 && <button className="bg-[#3D5158] p-2 text-white mb-4 rounded-sm" onClick={handleDensidade}>Densidade</button>}

            </div>
            <div className="w-full justify-center flex flex-row">
                {PagComp}

            </div>
        </div>
    )

}

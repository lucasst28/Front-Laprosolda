"use client";

import React, { useEffect, useState } from "react"
import Link from "next/link";
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
import "./t85.css"

const ParamsPage = () => {
    const [densidade, setDensidade] = useState<number>(0);
    const [calorEsp, setCalorEsp] = useState<number>(0);
    const [condutividade, setCondutividade] = useState<number>(0);
    const [aporte, setAporte] = useState<number>(0);
    const [espessura, setEspessura] = useState<number>(0);
    const [preHeat, setPreHeat] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [calculated, setCalculated] = useState<boolean>(false);
    const [taxaDeResfriamento, setTaxaDeResfriamento] = useState<number>(0);
    const [biDim, setBiDim] = useState<boolean>(false);
    const t1 = 700, t2 = 300;

    const handleCalculate = () => {
        fetch(`http://localhost:8000/calcs/t85?${new URLSearchParams({
            densidade: densidade.toString(),
            condutividade: condutividade.toString(),
            aporte: aporte.toString(),
            calor: calorEsp.toString(),
            preaquecimento: preHeat.toString(),
            espessura: espessura.toString()
        })}`)
            .then(res => res.json())
            .then(data => {
                setResult(data.result)
                setBiDim(data.bidim)
                setTaxaDeResfriamento(data.taxa_de_resfriamento)
                setCalculated(true);
            })
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <div className="table-row rounded-t-sm">
                    <label htmlFor="densidade">Densidade [g/cm^3]</label>
                    <input id="densidade" type="number"
                        value={densidade}
                        onChange={(e) => setDensidade(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark rounded-t-sm">
                    <label htmlFor="condutividade">Condutividade Térmica [J/(cm*s*°C)]</label>
                    <input id="condutividade" type="number"
                        value={condutividade}
                        onChange={(e) => setCondutividade(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row rounded-t-sm">
                    <label htmlFor="aporte">Aporte Térmico [J/cm]</label>
                    <input id="aporte" type="number"
                        value={aporte}
                        onChange={(e) => setAporte(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark">
                    <label htmlFor="caloresp">Calor Específico [J/(g*°C)]</label>
                    <input id="caloresp" type="number"
                        value={calorEsp}
                        onChange={(e) => setCalorEsp(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row">
                    <label htmlFor="preHeat">Temperatura de pré-aquecimento [°C]</label>
                    <input id="preHeat" type="number"
                        value={preHeat}
                        onChange={(e) => setPreHeat(parseFloat(e.target?.value))} />
                </div>
                <div className="table-row dark">
                    <label htmlFor="espessura">Espessra da peça [mm]</label>
                    <input id="espessura" type="number"
                        value={espessura}
                        onChange={(e) => setEspessura(parseFloat(e.target?.value))} />
                </div>

            </div>

            <button className="bg-[#3D5158] p-2 rounded-md mt-4 mb-3" onClick={handleCalculate}>Calcular</button>

            {
                calculated &&
                <>
                    <div className="table-row rounded-t-sm">
                        <p>Resultado: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{result.toFixed(2)} s</span></p>

                    </div>
                    <div className="table-row dark">
                        {
                            biDim ?
                                <p>Fórmula bi-dimensional usada:  ( h/hc &lt; 1 ) </p>
                                :
                                <p>Fórmula tri-dimensional usada: ( h/hc &gt; 1 ) </p>
                        }
                    </div>
                    <div className='table-row rounded-b-sm'>
                        <p>Taxa de Resfriamento: <span className="bg-[#333] text-white p-2 ml-2 rounded-sm">{taxaDeResfriamento.toFixed(2)} [°C/s]</span></p>
                    </div>
                </>

            }

        </div>
    )
}

export default function Page() {
    const [_pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("T8/5")
    }

    return (
        <div className="text-white flex flex-col text-center">
            <div className="flex flex-col">
                <ParamsPage />
            </div>
            <div>
                Para mais informações clique <Link href="/auth/info/t85"><span className="underline">aqui</span></Link>
            </div>
        </div>
    )
}

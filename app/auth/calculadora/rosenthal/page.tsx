"use client";

import { tabelaDeValores } from '@/utils/materiais';
import { ChangeEvent, useState, useRef } from 'react';
import "./rosenthal.css"
import { useContext } from 'react';
import { pageContext } from '@/contexts/pageContext';
import Link from 'next/link';

export default function Page() {
    const [t, setT] = useState<number>(0);
    const [q, setQ] = useState<number>(0);
    const [ro, setRo] = useState<number>(0);
    const [k, setK] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [v, setV] = useState<number>(0);
    const [d, setD] = useState<number>(0);
    const [t0, setT0] = useState<number>(0);
    const [_rerender, setRerender] = useState<boolean>(true);
    const imgRef = useRef<any>(null);
    const imgRefSide = useRef<any>(null);

    const [_pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Rosenthal")
    }

    const handleCalculate = () => {
        fetch(`http://localhost:8000/calcs/rosenthal?${new URLSearchParams().toString()}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (imgRef.current && imgRefSide.current) {
                    imgRef.current.src = `data:image/png;base64,${data.top}`
                    imgRefSide.current.src = `data:image/png;base64,${data.side}`
                }
            })
        setRerender((old) => old !== true);
    }

    const materiais = ["Selecionar Material", "304", "304L", "304LSi", "308", "308L", "308LSi", "316", "316L", "316LSi"]

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const mat = tabelaDeValores.get(e.target?.value);
        if (!mat) {
            alert("Material não está no banco")
            return;
        }

        setRo(mat.density);
        setK(mat.therm_conductivity);
        setC(mat.cal_esp);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="p-2 flex flex-col w-1/2">
                <div className="flex flex-row justify-end bg-gray-500 rounded-t-md p-2">
                    <select className="rounded-md p-1 bg-gray-200" id="" onChange={handleSelect}>
                        {materiais.map(mat => <option value={mat}>{mat}</option>)}
                    </select>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="table-row items-center w-full">
                        <label htmlFor="">q</label>
                        <input type="number"
                            className="p-1"
                            value={q}
                            onChange={(e) => setQ(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row dark items-center w-full">
                        <label htmlFor="">t</label>
                        <input type="number"
                            className="p-1"
                            value={t}
                            onChange={(e) => setT(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row items-center w-full">
                        <label htmlFor="">ρ</label>
                        <input type="number"
                            value={ro}
                            className="p-1"
                            onChange={(e) => setRo(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row dark items-center w-full">
                        <label htmlFor="">k</label>
                        <input type="number"
                            className="p-1"
                            value={k}
                            onChange={(e) => setK(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row items-center w-full">
                        <label htmlFor="">c</label>
                        <input type="number"
                            className="p-1"
                            value={c}
                            onChange={(e) => setC(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row dark items-center w-full">
                        <label htmlFor="">v</label>
                        <input type="number"
                            className="p-1"
                            value={v}
                            onChange={(e) => setV(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row items-center w-full">
                        <label htmlFor="">d</label>
                        <input type="number"
                            value={d}
                            className="p-1"
                            onChange={(e) => setD(parseFloat(e.target?.value))} />
                    </div>
                    <div className="table-row items-center w-full dark">
                        <label htmlFor="">T0</label>
                        <input type="number" id="" value={t0}
                            className="p-1"
                            onChange={(e) => setT0(parseFloat(e.target?.value))} />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-white'>Para mais informações clique <Link className='underline' href="/auth/info/rosenthal">aqui</Link></p>
            </div>
            <div className="flex flex-row justify-end w-1/2 my-5">
                <button onClick={handleCalculate}
                    className="bg-[#2C5364] text-white 
                    p-2 px-6 rounded-[4px] hover:opacity-[90%]
                    ease-in duration-200 right-0" >Calcular</button>
            </div>
            <img src="" alt="" ref={imgRef} />
            <img src="" alt="" ref={imgRefSide} />


        </div>
    )
}

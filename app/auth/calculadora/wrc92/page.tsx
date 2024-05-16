"use client";

import "./wrc.css"

import { useRef, useState, SetStateAction, Dispatch, ChangeEvent, useEffect } from 'react';
import { tabelaDeValores } from "@/utils/materiais";
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
import Link from "next/link";

import { acosInoxBase, acosInoxAdicao } from "@/utils/materiais";

const ElementsForm = ({ setRerender,
  setMat,
  rerender,
  mat,
  elementsStates,
  id }: {
    setRerender: Dispatch<SetStateAction<boolean>>,
    setMat: Dispatch<SetStateAction<string>>,
    mat: string
    rerender: boolean,
    elementsStates: [number[], Dispatch<SetStateAction<number[]>>][], id: number
  }) => {

  const [carbon, setCarbon] = elementsStates[0];
  const [copper, setCopper] = elementsStates[1];
  const [nitrogen, setNitrogen] = elementsStates[2];
  const [chromium, setChromium] = elementsStates[3];
  const [molybdenum, setMolybdenum] = elementsStates[4];
  const [nickel, setNickel] = elementsStates[5];
  const [niobium, setNiobium] = elementsStates[6];

  return (
    <div>
      <div className="flex flex-row">
        <span className="w-1/2"></span>
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Carbono [%]"
          }
        </p>

        <input type="number"
          value={carbon[id]}
          onChange={(e) => {
            const updatedItems = carbon;
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            updatedItems[id] = parseFloat(e.target.value);
            setCarbon(updatedItems)
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {id == 0 &&
            "Cobre [%]"
          }
        </p>
        <input type="number"
          value={copper[id]}
          onChange={(e) => {
            const updatedItems = copper;
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            updatedItems[id] = parseFloat(e.target.value);
            setCopper(updatedItems)
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Nitrogênio [%]"
          }
        </p>

        <input type="number"
          value={nitrogen[id]}
          onChange={(e) => {
            const updatedItems = nitrogen;
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            updatedItems[id] = parseFloat(e.target.value)
            setNitrogen(updatedItems)
          }} />
      </div>
      <div className="table-row dark">
        <p className=" ml-2">
          {
            id == 0 &&
            "Cromo [%]"
          }
        </p>

        <input type="number"
          value={chromium[id]}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            const updatedItems = chromium;
            setRerender(rerender !== true);
            updatedItems[id] = parseFloat(e.target.value)
            setChromium(updatedItems)
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Molibdênio [%]"
          }
        </p>

        <input type="number"
          value={molybdenum[id]}
          onChange={(e) => {
            const updatedItems = molybdenum;
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            updatedItems[id] = parseFloat(e.target.value);
            setMolybdenum(updatedItems)
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {
            id == 0 &&
            "Níquel [%]"
          }
        </p>

        <input type="number"
          value={nickel[id]}
          onChange={(e) => {
            const updatedItems = nickel;
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            updatedItems[id] = parseFloat(e.target.value);
            setNickel(updatedItems)
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Nióbio [%]"
          }
        </p>

        <input type="number"
          value={niobium[id]}
          onChange={(e) => {
            const updatedItems = niobium;
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            updatedItems[id] = parseFloat(e.target.value);
            setNiobium(updatedItems)
          }} />
      </div>
    </div>
  )
}

export default function Page() {
  const elements: [number[], Dispatch<SetStateAction<number[]>>][] = [];
  for (let i = 0; i < 7; ++i) {
    elements.push(useState<number[]>([0, 0, 0]))
  }

  const [pageTitle, setPageTitle] = useContext(pageContext)

  if (setPageTitle !== null) {
    setPageTitle("WRC-92")
  }

  const [calculated, setCalculated] = useState<boolean>(false);
  const [nickelEquivalent, setNickelEquivalent] = useState<number[]>([0, 0, 0]);
  const [chromiumEquivalent, setChromiumEquivalent] = useState<number[]>([0, 0, 0]);
  const [dilution, setDilution] = useState<number>(10);
  const [dilutionPoint, setDilutionPoint] = useState<[number, number]>([0, 0]);
  const [result, setResult] = useState<string>("");
  const [rerender0, setRerender0] = useState<boolean>(false);
  const [rerender1, setRerender1] = useState<boolean>(false);
  const [rerender2, setRerender2] = useState<boolean>(false);
  const [matBase1, setMatBase1] = useState<string>("Material de Base 1");
  const [matBase2, setMatBase2] = useState<string>("Material de Base 2");
  const [matAdicao, setMatAdicao] = useState<string>("Material de Adição");

  const imgRef = useRef<HTMLImageElement>(null);

  const handleCalculate = () => {
    const nickel = elements[5][0];
    const carbon = elements[0][0];
    const nitrogen = elements[2][0];
    const copper = elements[1][0];
    const chromium = elements[3][0];
    const molybdenum = elements[4][0];
    const niobium = elements[6][0];

    fetch(`http://localhost:8000/calcs/wrc?${new URLSearchParams({
      nickel: String(nickel),
      carbon: String(carbon),
      nitrogen: String(nitrogen),
      copper: String(copper),
      chromium: String(chromium),
      molybdenum: String(molybdenum),
      niobium: String(niobium),
      dilution: String(dilution)
    }).toString()}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(imgRef.current)
        if (imgRef.current) {
          imgRef.current.src = `data:image/png;base64,${data.image}`
        }

        setDilutionPoint(data.dilution)
        setChromiumEquivalent(data.creq)
        setNickelEquivalent(data.nieq)
      })

    setCalculated(true);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, idx: number) => {
    for (let j = 0; j < 7; ++j) {
      let obj = elements[j][0];
      let valores = tabelaDeValores.get(e.target.value);

      if (valores === null || valores === undefined) {
        alert("Erro: material não existe nos dados")
        return;
      }

      switch (j) {
        case 0:
          obj[idx] = valores["%C"];
          break;

        case 1:
          obj[idx] = valores["%Cu"];
          break;

        case 2:
          obj[idx] = valores["%N"];
          break;

        case 3:
          obj[idx] = valores["%Cr"];
          break;

        case 4:
          obj[idx] = valores["%Mo"];
          break;

        case 5:
          obj[idx] = valores["%Ni"];
          break;

        case 6:
          obj[idx] = valores["%Nb"];
          break;

        case 7:
          obj[idx] = valores["%Ti"];
          break;
      }

      elements[j][1](obj);
    }
    if (idx == 0) {
      setRerender0((old) => old !== true);
      setMatBase1(e.target.value);
    }

    else if (idx == 1) {
      setMatBase2(e.target.value);
      setRerender1((old) => old !== true);
    }

    else {
      setMatAdicao(e.target.value);
      setRerender2((old) => old !== true);
    }
  }

  let materiaisDeBase1 = ["Material de Base 1"];
  let materiaisDeBase2 = ["Material De Base 2"];
  let materiaisDeAdicao = ["Material de Adição"];

  materiaisDeBase1.push(...acosInoxBase);
  materiaisDeBase2.push(...acosInoxBase);
  materiaisDeAdicao.push(...acosInoxAdicao);

  return (
    <div className="schaeffler">
      <div className="flex flex-row">
        <div className="flex flex-col w-[33%]">
          <div className="label-select rounded-tl-md">
            <p className="ml-2">Elementos</p>
            <select value={matBase1}
              className="p-1 rounded-sm"
              onChange={(e) => handleSelect(e, 0)}>
              {materiaisDeBase1.map((mat, idx) => <option key={idx} value={mat}>{mat}</option>)}
            </select>
          </div>
          <ElementsForm setMat={setMatBase1}
            mat={"Base 1"}
            setRerender={setRerender0}
            rerender={rerender0}
            elementsStates={elements}
            id={0} />
        </div>
        <div className="flex flex-col w-[33%]">
          <div className="label-select">
            <span></span>
            <select value={matBase2}
              className=" p-1 rounded-sm"
              onChange={(e) => handleSelect(e, 1)}>
              {materiaisDeBase2.map((mat, idx) => <option key={idx} value={mat}>{mat}</option>)}
            </select>
          </div>
          <ElementsForm setRerender={setRerender1}
            mat={"Base 2"}
            setMat={setMatBase2}
            rerender={rerender1}
            elementsStates={elements}
            id={1} />
        </div>
        <div className="flex flex-col w-[33%]">
          <div className="label-select rounded-tr-md">
            <span></span>
            <select value={matAdicao} onChange={(e) => handleSelect(e, 2)}
              className="p-1 rounded-sm">
              {materiaisDeAdicao.map((mat, idx) => <option key={idx} value={mat}>{mat}</option>)}
            </select>
          </div>
          <ElementsForm setRerender={setRerender2}
            mat={"Adição"}
            setMat={setMatAdicao}
            rerender={rerender2}
            elementsStates={elements}
            id={2} />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="table-row w-[33%] my-4">
          <label htmlFor="dilution" className="flex flex-row items-center">Diluição [%] <span title="Quantidade de metal de base que foi diluído e agora faz parte da zona fundida junto ao metal de adição" className="bg-[#5599dd] ml-2 font-bold text-white pl-2 text-center align-center pr-2 rounded-[50%]">?</span></label>
          <input defaultValue={dilution} type="number" id="dilution" className="text-right w-1/2"
            onChange={(e) => setDilution(parseFloat(e.target.value))} />
        </div>
      </div>
      <div className="mr-[15px]">
        <div className="result-row dark">
          <p className="w-[33%] flex flex-row justify-between">
            <span>Cromo equivalente [%]:</span>
            <span> ( Material de Base 1 ) {chromiumEquivalent[0].toFixed(2)}</span> </p>
          <p>( Material de Base 2 ) {chromiumEquivalent[1].toFixed(2)}</p>
          <p>( Material de Adição ) {chromiumEquivalent[2].toFixed(2)}</p>
        </div>
        <div className="result-row">
          <p className="flex flex-row justify-between w-[33%]">
            <span>Níquel equivalente [%]:</span>
            <span>( Material de Base 1 ) {nickelEquivalent[0].toFixed(2)}</span> </p>
          <p> ( Material de Base 2 ) {nickelEquivalent[1].toFixed(2)}</p>
          <p> ( Material de Adição ) {nickelEquivalent[2].toFixed(2)}</p></div>
        <div className="result-row dark items-center">
          <p className="flex flex-row w-[33%] items-center">Resultado: <span className={`
            ml-6
            bg-[#333]
          `}>
            {result}

          </span>
          </p>
          <div className="flex flex-row justify-end w-[33%]">
            <p>Cr-eq [%]:  {dilutionPoint[0].toFixed(2)} </p>
          </div>
          <div className="flex flex-row justify-end w-[33%]">
            <p>Ni-eq [%]: {dilutionPoint[1].toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white">Para mais informações clique <Link className="underline" href="/auth/info/wrc92">aqui</Link></p>
        </div>
        <div className="w-full justify-center flex flex-row">
          <button onClick={handleCalculate}
            className="bg-[#2C5364] text-white 
            p-2 px-6 rounded-[4px] hover:opacity-[90%]
            ease-in duration-200 right-0 my-4" >Calcular</button>
        </div>
      </div>

      <div className="mt-10 w-full text-white">
        <div className="flex flex-row justify-between w-1/2 p-3 mx-auto bg-[#ccc] items-center rounded-md text-black">
          <div className="flex flex-row items-center">
            <p>Material de Base 1</p>
            <div className="ml-2 rounded-[50%] border-[1px] w-[6px] h-[6px] border-[#0000dd] bg-[#0000dd]"></div>
          </div>
          <div className="flex flex-row items-center">
            <p>Material de Base 2</p>
            <div className="ml-2 rounded-[50%] border-[1px] w-[6px] h-[6px] border-[#0000dd]"></div>
          </div>
          <div className="flex flex-row items-center">
            <p>Material de Adição</p>
            <div className="ml-2 rounded-[50%] border-[1px] w-[6px] h-[6px] border-[#aa0000] bg-[#aa0000]"></div>
          </div>
          <div className="flex flex-row items-center">
            <p>Diluição</p>
            <div className="ml-2 rounded-[50%] border-[1px] w-[6px] h-[6px] border-[#aa0000]"></div>
          </div>
        </div>
        <div className='my-10 relative mx-auto w-[fit-content]'>
          {calculated && <img src="" width={700} height={700} className="rounded-md" ref={imgRef} alt="Carregando" />}
        </div>
      </div>

    </div>
  )
}

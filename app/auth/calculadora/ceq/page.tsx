"use client";
import "./ceq.css"

import { Dispatch, SetStateAction, useState, ChangeEvent } from "react"
import { acosC, tabelaDeValores } from "@/utils/materiais";
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";

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
    elementsStates: [number, Dispatch<SetStateAction<number>>][], id: number
  }) => {

  const [carbon, setCarbon] = elementsStates[0];
  const [silicon, setSilicon] = elementsStates[1];
  const [manganese, setManganese] = elementsStates[2];
  const [chromium, setChromium] = elementsStates[3];
  const [molybdenum, setMolybdenum] = elementsStates[4];
  const [nickel, setNickel] = elementsStates[5];
  const [copper, setCopper] = elementsStates[6];
  const [vanadium, setVanadium] = elementsStates[7];
  const [phosphorus, setPhosphorus] = elementsStates[8];
  const [boron, setBoron] = elementsStates[9];
  const [niobium, setNiobium] = elementsStates[10]

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
        <p>
          C
        </p>
        <input type="number"
          value={carbon}
          onChange={(e) => {
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            setCarbon(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {id == 0 &&
            "Silício [%]"
          }
        </p>
        <p>
          Si
        </p>
        <input type="number"
          value={silicon}
          onChange={(e) => {
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            setSilicon(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Manganês [%]"
          }
        </p>
        <p>
          Mn
        </p>
        <input type="number"
          value={manganese}
          onChange={(e) => {
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            setManganese(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row dark">
        <p className=" ml-2">
          {
            id == 0 &&
            "Cromo [%]"
          }
        </p>
        <p>
          Cr
        </p>
        <input type="number"
          value={chromium}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setChromium(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Molibdênio [%]"
          }
        </p>
        <p>
          Mo
        </p>
        <input type="number"
          value={molybdenum}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setMolybdenum(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {
            id == 0 &&
            "Níquel [%]"
          }
        </p>
        <p>
          Ni
        </p>
        <input type="number"
          value={nickel}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setNickel(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Cobre [%]"
          }
        </p>
        <p>
          Cu
        </p>
        <input type="number"
          value={copper}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setCopper(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {
            id == 0 &&
            "Vanádio [%]"
          }
        </p>
        <p>
          V
        </p>
        <input type="number"
          value={vanadium}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setVanadium(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Fósforo [%]"
          }
        </p>
        <p>
          P
        </p>
        <input type="number"
          value={phosphorus}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setPhosphorus(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row dark">
        <p className="ml-2">
          {
            id == 0 &&
            "Boro [%]"
          }
        </p>
        <p>
          B
        </p>
        <input type="number"
          value={boron}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setBoron(parseFloat(e.target.value))
          }} />
      </div>
      <div className="table-row ">
        <p className="ml-2">
          {
            id == 0 &&
            "Boro [%]"
          }
        </p>
        <p>
          B
        </p>
        <input type="number"
          value={niobium}
          onChange={(e) => {
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            setNiobium(parseFloat(e.target.value))
          }} />
      </div>
    </div>
  )
}

export default function Page() {
  let elements: [number, Dispatch<SetStateAction<number>>][] = [];
  for (let i = 0; i < 11; ++i) {
    elements[i] = useState<number>(0);
  }

  const [_pageTitle, setPageTitle] = useContext(pageContext)
  if (setPageTitle !== null) {
    setPageTitle("Carbono Equivalente")
  }

  const [rerender, setRerender] = useState<boolean>(false);
  const [mat, setMat] = useState<string>("");
  const [calculated, setCalculated] = useState<boolean>(false);
  const [CEAWS, setCEAWS] = useState<number>(0);
  const [CEIIW, setCEIIW] = useState<number>(0);
  const [PCM, setPCM] = useState<number>(0);
  const [CE, setCE] = useState<number>(0);
  const [CET, setCET] = useState<number>(0);
  const [CEN, setCEN] = useState<number>(0);
  const [integridade, setIntegridade] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleCalculate = () => {
    const carbon = elements[0][0];
    const silicon = elements[1][0];
    const manganese = elements[2][0];
    const chromium = elements[3][0];
    const molybdenum = elements[4][0];
    const nickel = elements[5][0];
    const copper = elements[6][0];
    const vanadium = elements[7][0];
    const phosphorus = elements[8][0];
    const boron = elements[9][0];
    const niobium = elements[10][0];

    setCalculated(true);

    fetch(`http://localhost:8000/calcs/ceq?${new URLSearchParams({
      carbon: String(carbon),
      silicon: String(silicon),
      manganese: String(manganese),
      chromium: String(chromium),
      molybdenum: String(molybdenum),
      nickel: String(nickel),
      copper: String(copper),
      vanadium: String(vanadium),
      phosphorus: String(phosphorus),
      boron: String(boron),
      niobium: String(niobium)
    })}`)
      .then(res => res.json())
      .then(data => {
        setCEAWS(data.ceaws)
        setCEIIW(data.ceiiw)
        setPCM(data.pcm)
        setCE(data.ce)
        setCET(data.cet)
        setCEN(data.cen)

        if (data.ceiiw < 0.35) {
          setIntegridade("Ótima soldabilidade | Pré-aquecimento não recomendado")
          setColor("#239c1f")
        } else if (data.ceiiw < 0.40) {
          setIntegridade("Média soldabilidade | Pré-aquecimento é recomendado")
          setColor("#e0ca22")
        } else if (data.ceiiw < 0.45) {
          setIntegridade("Boa soldabilidade | Pré-aquecimento é recomendado")
          setColor("#e0741b")
        } else if (data.ceiiw < 0.51) {
          setIntegridade("Má soldabilidade | Pré-aquecimento é recomendado")
          setColor("#bf3632")
        } else {
          setIntegridade("Péssima soldabilidade | Pré-aquecimento é recomendado")
          setColor("#7a1910")
        }

      })
  }

  const materiaisDeAnalise = ["Material de Análise"];
  materiaisDeAnalise.push(...acosC);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, idx: number) => {
    for (let j = 0; j < 10; ++j) {
      let obj = elements[j][0];
      console.log(obj);
      let valores = tabelaDeValores.get(e.target.value);
      console.log(valores)

      if (valores === null || valores === undefined) {
        alert("Erro: material não existe nos dados")
        return;
      }

      switch (j) {
        case 0:
          elements[j][1](valores["%C"]);
          break;

        case 1:
          elements[j][1](valores["%Si"]);
          break;

        case 2:
          elements[j][1](valores["%Mn"]);
          break;

        case 3:
          elements[j][1](valores["%Cr"]);
          break;

        case 4:
          elements[j][1](valores["%Mo"]);
          break;

        case 5:
          elements[j][1](valores["%Ni"]);
          break;

        case 6:
          elements[j][1](valores["%Cu"]);
          break;

        case 7:
          elements[j][1](valores["%V"]);
          break;

        case 8:
          elements[j][1](valores["%P"]);
          break;

        case 9:
          elements[j][1](valores["%B"]);
      }
    }
    if (idx == 0) {
      setRerender((old) => old !== true);
      setMat(e.target.value);
    }
  }

  // TODO: criar clique aqui para explicação da integridade
  // TODO: PCM só pra %C < 0.12 ???
  // TODO: média solubilidade melhor que boa ??????

  return (
    <div className="flex flex-col w-full pr-6">
      <div className="flex flex-row justify-between header">
        <h2>Elemento</h2>
        <h2>Abreviação</h2>
        <div className="flex flex-row justify-between w-1/4">
          <h2>Porcentagem</h2>
          <select value={mat}
            className="p-1 rounded-md"
            onChange={(e) => handleSelect(e, 0)}>
            {materiaisDeAnalise.map((mati) => <option value={mati}>{mati}</option>)}
          </select>
        </div>
      </div>
      <div>
        <div className="label-select rounded-tr-md"></div>
        <ElementsForm
          elementsStates={elements}
          rerender={rerender}
          setRerender={setRerender}
          id={0}
          mat={"de Base?"}
          setMat={setMat}
        />
      </div>
      <div className="my-4 flex flex-row w-full justify-end">
        <button onClick={handleCalculate}
          className="bg-[#2C5364] text-white 
                    p-2 px-6 rounded-[4px] hover:opacity-[90%]
                    ease-in duration-200 right-0" >Calcular</button>
      </div>
      <div className="text-white flex justify-center mb-4">
        <p>Para mais informações clique <a className="underline" href="/auth/info/ceq">aqui</a></p>
      </div>
      {
        calculated &&
        <div className="mb-10">
          <div className="result-row ">
            <p>CE (AWS): {CEAWS.toFixed(2)}</p>
          </div>
          <div className="result-row dark mt-5 ">
            <p>CE (IIW): {CEIIW.toFixed(2)} <span className="p-1 ml-2 rounded-sm" style={{ backgroundColor: color }}>{integridade}</span></p>
          </div>
          <div className="result-row mt-5">
            <p>PCM: {PCM.toFixed(2)}</p>
          </div>
          <div className="result-row dark mt-5">
            <p>CE: {CE.toFixed(2)}</p>
          </div>
          <div className="result-row mt-5">
            <p>CET: {CET.toFixed(2)}</p>
          </div>
          <div className="result-row dark mt-5">
            <p>CEN: {CEN.toFixed(2)}</p>
          </div>
        </div>
      }

    </div>
  )
}

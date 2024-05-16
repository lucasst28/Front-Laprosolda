"use client";

import { useRef, Dispatch, SetStateAction, useState, ChangeEvent } from "react"
import { tabelaDeValores } from "@/utils/materiais";
import './delong.css'
import { useContext } from "react";
import { pageContext } from "@/contexts/pageContext";
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
  const [silicon, setSilicon] = elementsStates[1];
  const [manganese, setManganese] = elementsStates[2];
  const [chromium, setChromium] = elementsStates[3];
  const [molybdenum, setMolybdenum] = elementsStates[4];
  const [nickel, setNickel] = elementsStates[5];
  const [niobium, setNiobium] = elementsStates[6];
  const [nitrogen, setNitrogen] = elementsStates[7];

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
            "Silício [%]"
          }
        </p>
        <input type="number"
          value={silicon[id]}
          onChange={(e) => {
            const updatedItems = silicon;
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            updatedItems[id] = parseFloat(e.target.value);
            setSilicon(updatedItems)
          }} />
      </div>
      <div className="table-row">
        <p className="ml-2">
          {
            id == 0 &&
            "Manganês [%]"
          }
        </p>

        <input type="number"
          value={manganese[id]}
          onChange={(e) => {
            const updatedItems = manganese;
            setRerender(rerender !== true);
            setMat(`Material de ${mat}`);
            updatedItems[id] = parseFloat(e.target.value)
            setManganese(updatedItems)
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
      <div className="table-row dark">
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
            setMat(`Material de ${mat}`);
            setRerender(rerender !== true);
            updatedItems[id] = parseFloat(e.target.value);
            setNitrogen(updatedItems)
          }} />
      </div>
    </div>
  )
}

export default function Page() {
  const [rerender0, setRerender0] = useState<boolean>(true);
  const [nickelEquivalent, setNickelEquivalent] = useState<number[]>([0, 0, 0]);
  const [rerender1, setRerender1] = useState<boolean>(true);
  const [rerender2, setRerender2] = useState<boolean>(true);
  const [chromiumEquivalent, setChromiumEquivalent] = useState<number[]>([0, 0, 0]);
  const [calculated, setCalculated] = useState<boolean>(false);
  const [matBase1, setMatBase1] = useState<string>("Material de Base 1");
  const [matBase2, setMatBase2] = useState<string>("Material de Base 2");
  const [matAdicao, setMatAdicao] = useState<string>("Material de Adição");
  const [ferriteNumber, setFerriteNumber] = useState<number>(0);
  const [showData, setShowData] = useState<boolean>(false);
  const [dilution, setDilution] = useState<number>(0);

  const [_pageTitle, setPageTitle] = useContext(pageContext)
  if (setPageTitle !== null) {
    setPageTitle("Diagrama de DeLong")
  }

  const elements: [number[], Dispatch<SetStateAction<number[]>>][] = [];
  for (let i = 0; i < 8; ++i) {
    elements.push(useState<number[]>([0, 0, 0]))
  }

  const rHeight = 700;
  const rWidth = 700;
  const imgRef = useRef<HTMLImageElement>(null);

  const handleCalculate = () => {
    const nickel = elements[5][0];
    const carbon = elements[0][0];
    const manganese = elements[2][0];
    const nitrogen = elements[7][0];
    const silicon = elements[1][0];
    const chromium = elements[3][0];
    const molybdenum = elements[4][0];
    const niobium = elements[6][0];



    if (imgRef.current) {
      fetch(`http://localhost:8000/calcs/delong?${new URLSearchParams({
        carbon: String(carbon),
        silicon: String(silicon),
        manganese: String(manganese),
        chromium: String(chromium),
        molybdenum: String(molybdenum),
        nickel: String(nickel),
        niobium: String(niobium),
        nitrogen: String(nitrogen),
        dilution: String(dilution)
      })}`)
        .then(res => res.json())
        .then(data => {
          if (imgRef.current === null) {
            console.log("returning")
            return;
          }

          imgRef.current.src = `data:image/png;base64,${data.image}`
          if (data.ferrite_percent < 0 || data.ferrite_number < 0) {
            setShowData(false)
          }

          else {
            setShowData(true)
            setFerriteNumber(data.ferrite_number)
          }

          setChromiumEquivalent(data.cr_eq);
          setNickelEquivalent(data.ni_eq);
        })
    }


    setCalculated(true);
  };

  const materiaisDeBase1 = ["Material de Base 1"];
  const materiaisDeBase2 = ["Material de Base 2"];
  const materiaisDeAdicao = ["Material de Adição"];

  materiaisDeBase1.push(...acosInoxBase);
  materiaisDeBase2.push(...acosInoxAdicao);
  materiaisDeAdicao.push(...acosInoxAdicao);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>, idx: number) => {
    for (let j = 0; j < 8; ++j) {
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
          obj[idx] = valores["%Si"];
          break;

        case 2:
          obj[idx] = valores["%Mn"];
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

        case 8:
          obj[idx] = valores["%N"]
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

  return (
    <div className="flex flex-col w-full">
      <div className="p-4 flex flex-col w-full">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <div className="label-select rounded-tl-md with-select">
              <p className="ml-2">Elementos</p>
              <select value={matBase1}
                className="p-1 rounded-sm"
                onChange={(e) => handleSelect(e, 0)}>
                {materiaisDeBase1.map((mat) => <option value={mat} key={mat}>{mat}</option>)}
              </select>
            </div>
            <ElementsForm
              elementsStates={elements}
              rerender={rerender0}
              setRerender={setRerender0}
              id={0}
              mat={"de Base 1"}
              setMat={setMatBase1}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="label-select">
              <p></p>
              <select value={matBase2}
                className="p-1 rounded-sm"
                onChange={(e) => handleSelect(e, 1)}>
                {materiaisDeBase2.map((mat) => <option value={mat} key={mat}>{mat}</option>)}
              </select>
            </div>

            <ElementsForm
              elementsStates={elements}
              rerender={rerender1}
              setRerender={setRerender1}
              id={1}
              mat={"de Base 2"}
              setMat={setMatBase2}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="label-select rounded-tr-md">
              <p></p>
              <select value={matAdicao}
                className="p-1 rounded-sm"
                onChange={(e) => handleSelect(e, 2)}>
                {materiaisDeAdicao.map((mat) => <option value={mat} key={mat}>{mat}</option>)}
              </select>
            </div>

            <ElementsForm
              elementsStates={elements}
              rerender={rerender2}
              setRerender={setRerender2}
              id={2}
              mat={"de Adicao"}
              setMat={setMatAdicao}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end w-full mt-5">
          <button onClick={handleCalculate}
            className="bg-[#2C5364] text-white 
                    p-2 px-6 rounded-[4px] hover:opacity-[90%]
                    ease-in duration-200 right-0" >Calcular</button>
        </div>
        <div className="table-row p-2 rounded-sm mt-5">
          <div className="w-[33%]">

            <label htmlFor="dilution">Diluição</label>
            <input type="text" id="dilution" value={dilution} onChange={e => isNaN(parseFloat(e.target?.value)) ? 0 : setDilution(parseFloat(e.target?.value))} />
          </div>
        </div>
        <div className="result-row mt-5">
          <p className="w-[fit-content] flex flex-row justify-between">
            <span>Cromo equivalente [%]:</span>
            <span> ( Material de Análise ) {chromiumEquivalent[0].toFixed(2)}</span>
          </p>
          <p>( Mínimo ) {chromiumEquivalent[1].toFixed(2)}</p>
          <p>( Máximo ) {chromiumEquivalent[2].toFixed(2)}</p>
        </div>
        <div className="result-row dark">
          <p className="w-[fit-content] flex flex-row justify-between">
            <span> Níquel equivalente [%]:</span>
            <span> ( Material de Análise ) {nickelEquivalent[0].toFixed(2)}</span> </p>
          <p>( Mínimo ) {nickelEquivalent[1].toFixed(2)}</p>
          <p>( Máximo ) {nickelEquivalent[2].toFixed(2)}</p>
        </div>
        {
          calculated ?

            (showData &&
              <div className="result-row ">
                < p className="min-w-[252px]"> Número de Ferrita aprox: <span className={`${ferriteNumber < 5 ? "bg-[#339933]" : "bg-[#993333]"} p-[6px] rounded-sm ml-2`}>{ferriteNumber.toFixed(2)}</span></p>
                <div className="flex flex-row ml-2 text-justify">
                  <p className="text-black font-medium">Para os aços duplex um FN menor que 5 tende a obter uma microestrutura majoritariamente austenítica e uma pequena fração de ferrita. Dessa forma, há uma redução das chances de apresentar tricas à quente uma vez que a ferrita dissolve os elementos responsáveis pela formação de trincas a quente (S e P) em sua matriz, deixando a austenita livre de tais impurezas</p>
                </div>
              </div>

              ||

              <div className="result-row">
                <p>Não contém quantidade significativa de ferrita</p>
              </div>
            )

            :
            ""
        }

      </div >
      <div className="text-white flex justify-center items-center p-2">
        <p >Para mais informações clique <a href="/auth/info/delong" className="underline">aqui</a></p>
      </div>
      <div className=" flex flex-row justify-center mt-20 mb-10">
        <div className="bg-white rounded-md relative text-[14px] font-bold">
          <img className={`rounded-md ml-10 ${!calculated && "hidden"}`} ref={imgRef} width={rWidth} height={rHeight} />
        </div>
      </div>
    </div >
  )
}

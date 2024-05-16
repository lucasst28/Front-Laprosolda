"use client"

import "./SideMenu.css"
import Link from "next/link"

export default function SideMenu() {
    return (
        <div className="side-menu w-[400px] h-[100%] fixed flex flex-col justify-between items-center z-[998]">
            <img src="/petrobras.svg" alt="Petrobras" width={230} height={230} className="mt-8"/>
            <Link href="/auth/metalurgia"
                className="bg-gray-400 rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link ">Metalurgia e Materiais</Link>
            <Link href="/auth/processos"
                className="bg-gray-400 rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link">Processos</Link>
            <Link href="/auth/projeto"
                className="bg-gray-400 rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link">Projeto</Link>
            <Link href="/auth/normas"
                className="bg-gray-400 rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link">Normalização e ETs</Link>
            <Link href="/auth/treinamento"
                className="bg-gray-400 rounded-md p-2 shadow-md
                w-3/4 h-[3rem] text-center justify-center flex items-center side_menu_link">Treinamento com Metodologia Internacional</Link>
            <Link href="/auth/controle"
                className="bg-[#074058] text-white rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link">Controle de Usuários</Link>
            <Link href="/auth/monitoramento"
                className="mb-8 bg-[#074058] text-white rounded-md p-2 shadow-md
                w-3/4 h-[3rem] justify-center flex items-center side_menu_link"
                    >Monitoramento de Acesso</Link>
        </div>
    )
}
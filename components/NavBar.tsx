"use client";

import "./NavBar.css"
import { useState, ChangeEvent, useContext } from "react";
import { useRouter } from "next/navigation";
import { pageContext } from "@/contexts/pageContext"

export default function NavBar() {
    const [search, setSearch] = useState<string> ("");
    const [lastPage, setLastPage] = useState<string> ("");
    const router = useRouter();
    const [pageTitle, setPageTitle] = useContext(pageContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(search)

        if (search.length === 0) {
            router.push(`/auth/search?q=${encodeURIComponent(e.target.value)}`)
        }
        else if (e.target.value.length > 0) {
            router.replace(`/auth/search?q=${encodeURIComponent(e.target.value)}`);
        }

        else {
            router.back();
        }
        setSearch(e.target.value);
    }

    const handleLogout = () => {

    }

    return (
        <nav className="ml-[400px] fixed w-[calc(100%-400px)] h-[100px] z-[998] bg-gray-500 flex flex-row items-center justify-end">
            <div className="w-full text-white text-4xl font-bold flex justify-center">
                <h1>{pageTitle}</h1>
            </div>
            <div className=" mr-[20px] bg-gray-400 rounded-3xl flex flex-row w-1/4">
                <img src="/search-svgrepo-com.svg" alt="search" width={30} height={30} className="ml-2"/>
                <input value={search} 
                       placeholder="Pesquisar"
                       type="text" 
                       className="p-2 rounded-3xl bg-gray-400 placeholder-gray-600 text-black focus:outline-none"
                       onChange={handleChange}/>
            </div>
            <div>
                <ul className="flex flex-row text-gray-300">
                    <li className="p-2 "><a className="hover:text-gray-600 ease-in duration-200" href="/sobre">Sobre</a></li>
                    <li className="nav_link_middle p-2 "><a className="hover:text-gray-600 ease-in duration-200" href="/suporte">Suporte</a></li>
                    <li className="mr-4 p-2 "><a className="hover:text-gray-600 ease-in duration-200" href="/ajuda">Ajuda</a></li>
                </ul>
            </div>
            <button className="mr-6 bg-gray-900 text-white rounded-2xl py-1 px-6" onClick={handleLogout}>Sair</button>
            
        </nav>
    )
}
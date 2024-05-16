"use client";

import { useSearchParams } from "next/navigation"
import { lista, map } from "@/utils/calculadoras"

import Fuse from "fuse.js";
import { pageContext } from "@/contexts/pageContext";
import { useContext } from "react";

export default function Page() {
    const searchParams = useSearchParams();

    const fuse = new Fuse(lista)
    const query = searchParams.get("q");
    const [pageTitle, setPageTitle] = useContext(pageContext)
    if (setPageTitle !== null) {
        setPageTitle("Pesquisa")
    }

    return (
        <div>
            <div>
                <ul className=" grid grid-cols-4 mt-10 mb-10">
                    {   
                        query &&
                        fuse.search(query).map((item) => (
                        <li><a href={map.get(item.item)?.href} className="flex flex-col items-center justify-center rounded-xl bg-cyan-100 p-4"><img src={map.get(item.item)?.img} width={50} height={50}
                        alt={item.item} />{item.item}</a></li>))
                    }
                </ul>
            </div>
        </div>
    )
}
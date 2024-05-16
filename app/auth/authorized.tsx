"use client"
import SideMenu from "@/components/SideMenu";
import NavBar from "@/components/NavBar";
import { pageContext } from "@/contexts/pageContext";
import { useState } from "react"

export default function Authorized({children} : {children: React.ReactNode}) {
    const [title, setTitle] = useState<string> ("");

    return (
        <div className="h-full w-full">
            <pageContext.Provider value={[title, setTitle]}>
                <SideMenu/>
                <NavBar/>
                <div className="ml-[420px] mt-[120px] mr-[10px]">
                    {children}
                </div>
            </pageContext.Provider>
        </div>
    )
}
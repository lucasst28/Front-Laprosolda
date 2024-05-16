import { redirect } from "next/navigation";
import Authorized from "./authorized";

export default async function Page({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const res = await fetch("http://localhost:3000/api/auth", { cache: "no-store"});
    const isAuthenticated = await res.json();
  
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      redirect("/login");
    }

    return (
      <Authorized>
        {children}
      </Authorized>
    )

    
}
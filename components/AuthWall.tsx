"use client"
import { useEffect, useState } from "react";
import LoginComponent from "@/components/LoginComponent"

export default function AuthWall({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:8000/auth/is-loggedin",
      { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsLoggedIn(data.isLoggedIn);
      })
  }, [])

  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return (
      <html>
        <body>
          <LoginComponent />
        </body>
      </html>
    )
  }


  return (
    <html lang="en" className="w-screen h-screen">
      <body className="flex flex-row overflow-x-hidden">
        {children}
      </body>
    </html>
  );

}

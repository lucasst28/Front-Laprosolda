import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import AuthWall from "@/components/AuthWall";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sdsolda",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthWall>
      {children}
    </AuthWall>
  )
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { poppins } from "./assets/fonts/fonts";
import "./globals.css";

const DrawerWrapper = dynamic(() => import("./components/drawer/DrawerWrapper"))

export const metadata: Metadata = {
  title: "Teste Cubevis",
  description: "Teste Cubevis para a vaga de Desenvolvedor Front-end Pleno",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const defaultLang = "pt-BR"
  return (
    <html lang={defaultLang} >
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        <DrawerWrapper>
          {children}
        </DrawerWrapper>
      </body>
    </html>
  )
}

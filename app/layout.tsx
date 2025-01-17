import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./styles/fonts/fonts";
import DrawerWrapper from "./components/drawer/DrawerWrapper";

export const metadata: Metadata = {
  title: "Teste Cubevis",
  description: "Teste Cubevis para a vaga de Desenvolvedor Front-end Pleno",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const defaultLang = "pt-BR"
  return (
    <html lang={defaultLang} suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`} >
        <DrawerWrapper>
          {children}
        </DrawerWrapper>
      </body>
    </html>
  )
}

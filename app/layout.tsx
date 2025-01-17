import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./styles/fonts/fonts";

export const metadata: Metadata = {
  title: "Teste Cubevis",
  description: "Teste Cubevis para a vaga de Desenvolvedor Front-end Pleno",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const defaultLang = "pt-BR"
  return (
    <html lang={defaultLang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  )
}

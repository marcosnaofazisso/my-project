import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teste Cubevis",
  description: "Teste Cubevis para a vaga de Desenvolvedor Front-end Pleno",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const defaultLang = "pt-BR"
  return (
    <html lang={defaultLang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}

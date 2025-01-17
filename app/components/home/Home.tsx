"use client"

import Image from "next/image";
import homeImage from "../../../public/img/welcome.png";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-3xl font-bold mt-8">Boas vindas!</h1>
            <p className="font-normal mt-4">Organize seus projetos e tarefas de forma simples e eficiente.</p>
            <Image
                src={homeImage.src}
                alt="Welcome Illustration"
                width={400}
                height={400}
            />
        </div>
    );
}
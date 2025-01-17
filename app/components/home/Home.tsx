"use client"

import { useStoreUser } from "@/app/data/user/storeUser";
import DefaultButton from "@/app/ui/buttons/DefaultButton";
import Image from "next/image";
import { useRef } from "react";
import homeImage from "../../../public/img/welcome.png";

export default function Home() {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const { name, email, setUserData } = useStoreUser();

    const handleContinue = () => {
        const name = nameRef.current?.value || "";
        const email = emailRef.current?.value || "";

        setUserData(name, email);
    };
    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-3xl font-bold mt-8">{name ? `Boas vindas, ${name}!` : "Boas vindas!"}</h1>
            <p className="font-normal mt-4">Organize seus projetos e tarefas de forma simples e eficiente.</p>
            <Image
                src={homeImage.src}
                alt="Welcome Illustration"
                width={400}
                height={400}
            />

            { }<div className="flex flex-col justify-center gap-8 ">
                <p className="font-normal mt-4">Para ter uma experiência personalizada, digite seu nome e e-mail abaixo</p>
                <div className="flex flex-col gap-4">
                    <input
                        ref={nameRef}

                        type="name"
                        name="name"
                        placeholder="Digite seu nome"
                        className="w-96 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
                    />
                    <input
                        type="email"
                        ref={emailRef}

                        name="email"
                        placeholder="Digite seu email"
                        className="w-96 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple"
                    />
                </div>
                <DefaultButton title="Continuar" onClick={handleContinue} />
            </div>

        </div>
    );
}
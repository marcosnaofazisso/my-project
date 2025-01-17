"use client"

import { useStoreUser } from "@/app/data/user/storeUser";
import { isNull } from "@/app/lib/utils";
import Image from "next/image";
import homeImage from "../../../public/img/welcome.png";
import UnregisteredUser from "./unregistered-user/UnregisteredUser";

export default function Home() {

    const { name, email, setUserData } = useStoreUser();
    const unregisteredUser = isNull(name) || isNull(email)

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
            {email && <p className="font-normal mt-4">Registrado com sucesso com o e-mail: <span className="font-semibold">{email}</span></p>}

            {unregisteredUser && <UnregisteredUser />}

        </div>
    );
}
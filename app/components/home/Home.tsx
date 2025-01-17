"use client"

import { useStoreUser } from "@/app/data/user/storeUser";
import { isNull } from "@/app/lib/utils";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Image from "next/image";
import homeImage from "../../../public/img/congratulations.png";
import UnregisteredUser from "./unregistered-user/UnregisteredUser";

export default function Home() {

    const { name, email } = useStoreUser();
    const unregisteredUser = isNull(name) || isNull(email)

    return (
        <div className="flex flex-col h-screen p-4">
            <div className='flex flex-row items-center gap-2'>
                <HomeOutlinedIcon className="text-[32px]" />
                <h1 className="text-[32px] font-normal leading-[48px] font-poppins">{name ? `Boas vindas, ${name}!` : "Boas vindas!"}</h1>
            </div>

            <p className="font-normal mt-4">Organize seus projetos e tarefas de forma simples e eficiente.</p>

            {email &&
                (<div>
                    <p className="font-normal mt-4">Registrado com sucesso com o e-mail: <span className="font-semibold">{email}</span></p>
                    <Image
                        src={homeImage.src}
                        alt="Welcome Illustration"
                        width={400}
                        height={400}
                    />
                </div>)}

            {unregisteredUser && <UnregisteredUser />}

        </div>
    );
}
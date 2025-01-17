"use client";

import Image from "next/image";
import Link from "next/link";
import noNotificationsImage from "../../../public/img/notifications.png";

export default function Notifications() {
    return (
        <div className="flex flex-col items-center h-screen ">
            <h1 className="text-2xl font-bold mt-8">Sem notificações</h1>
            <p className="font-normal mt-4">
                Você ainda não tem nenhuma notificação. Assim que houver algo novo, você verá aqui.
            </p>
            <Image
                src={noNotificationsImage}
                alt="No Notifications"
                width={500}
                height={500}
            />
            <Link href="/" className="mt-4 text-purple hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    );
}

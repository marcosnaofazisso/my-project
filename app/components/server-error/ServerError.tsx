"use client"

import Image from 'next/image';
import Link from 'next/link';
import serverErrorImage from '../public/img/server-error.png';

export default function ServerError() {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mt-8">Erro de servidor</h1>
            <p className="font-normal mt-4">Estamos trabalhando para resolver os problemas o quanto antes, desculpe o transtorno.</p>
            <Image
                src={serverErrorImage}
                alt="Not Found"
                width={500}
                height={500}
            />
            <Link href="../" className="mt-4 text-purple hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    );
}
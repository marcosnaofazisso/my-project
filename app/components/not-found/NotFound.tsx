"use client"

import { useStoreUser } from '@/app/data/user/storeUser'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import notFoundImage from '../../../public/img/not-found.png'

export default function NotFound() {

    const { clearUser } = useStoreUser()

    const [countdown, setCountdown] = useState(4)
    const router = useRouter()

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)

        if (countdown === 0) {
            clearInterval(timer)
            clearUser()
            router.push('/')
        }

        return () => clearInterval(timer)
    }, [countdown, router, clearUser])

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-8">Página não encontrada</h1>
            <p className="font-normal mt-4">A página que você está procurando não existe.</p>
            <p className="font-normal mt-4">Vamos te redirecionar para a home em {countdown} segundos</p>
            <Image
                src={notFoundImage}
                alt="Not Found"
                width={500}
                height={500}
            />
            <Link href="/" className="mt-4 text-purple hover:underline">
                Voltar para a página inicial
            </Link>
        </div>
    )
}

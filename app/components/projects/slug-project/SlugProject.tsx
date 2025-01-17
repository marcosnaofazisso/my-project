"use client"

import { useStoreUser } from "@/app/data/user/storeUser";
import SectionButton from "@/app/ui/buttons/section/SectionButton";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SlugProjectProps {
    slug: string;
}

export default function SlugProject({ slug }: SlugProjectProps) {

    const { isProjectAlreadyAdded } = useStoreUser()

    if (!slug || !isProjectAlreadyAdded(slug)) {
        notFound()
    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="./" >Meus Projetos</Link>
                <p className="text-purple">{slug}</p>
            </Breadcrumbs>
            <div className="flex flex-row justify-center items-center font-semibold">
                <h1>{slug}</h1>
            </div>

            <div className="flex flex-row h-screen">
                <SectionButton />

            </div>
        </div>
    )
}


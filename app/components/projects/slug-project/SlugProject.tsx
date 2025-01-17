"use client"

import { useStoreUser } from "@/app/data/user/storeUser";
import { capitalizeFirstLetter } from "@/app/lib/utils";
import SectionButton from "@/app/ui/buttons/section/SectionButton";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SlugProjectProps {
    slug: string;
}

export default function SlugProject({ slug }: SlugProjectProps) {

    const { sections, isProjectAlreadyAdded } = useStoreUser()

    if (!slug || !isProjectAlreadyAdded(slug)) {
        notFound()
    }

    const projectSections = sections[slug] || []

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="./" >Meus Projetos</Link>
                <p className="text-purple">{slug}</p>
            </Breadcrumbs>

            <div className="flex flex-row justify-center items-center font-semibold">
                <h1>{capitalizeFirstLetter(slug)}</h1>
            </div>

            {projectSections.length > 0 ? (
                <div className="flex flex-row h-full max-h-[100px] w-full max-w-[200px]">
                    {projectSections.map((section, index) => {
                        return (
                            <div key={section.name || index} className="p-2 mt-2 border border-gray-300 rounded-md">
                                <p className="font-semibold">{section.name}</p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="mt-4">Nenhuma seção encontrada para este projeto.</p>
            )}

            <div className="flex flex-row h-screen">
                <SectionButton projectName={slug} />
            </div>



        </div>
    )
}

import { Breadcrumbs } from "@mui/material";
import Link from "next/link";

interface SlugProjectProps {
    slug: string;
}

export default function SlugProject({ slug }: SlugProjectProps) {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="./" >Meus Projetos</Link>
                <p className="text-purple">{slug}</p>
            </Breadcrumbs>
            <div className="flex flex-row justify-center items-center font-semibold">
                <h1 >{slug}</h1>
            </div>
        </div>
    );
}

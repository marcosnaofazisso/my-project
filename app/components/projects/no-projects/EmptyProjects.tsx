
import Image from 'next/image';
import noProjectYet from '../../../../public/img/search.png';

export default function EmptyProjects() {
    return (
        <div className="flex flex-col items-center text-center">
            <p className="mt-4 font-semibold text-lg">Parece que ainda não há nenhum projeto criado</p>
            <Image
                src={noProjectYet}
                alt="Sem projetos ainda"
                width={300}
                height={300}
            />
        </div>
    )
}

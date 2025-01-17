import Image from 'next/image';
import Link from 'next/link';
import notFoundImage from '../public/img/not-found.png';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mt-8">Página não encontrada</h1>
            <p className="font-normal mt-4">A página que você está procurando não existe.</p>
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
    );
}
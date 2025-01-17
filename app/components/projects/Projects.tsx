import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';
import noProjectYet from '../../../public/img/search.png'

export default function Projects() {
    return (
        <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Meus Projetos</h2>
                <button className="bg-purple text-white px-4 py-2 rounded-md hover:bg-purpleDark">
                    Novo Projeto +
                </button>
            </div>

            <div className="flex items-center mb-4">
                <SearchOutlinedIcon className="h-6 w-6 text-gray-500" />
                <input
                    type="text"
                    placeholder="Faça sua busca..."
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <p className="mt-4 font-semibold text-lg">Parece que ainda não há nenhum projeto criado</p>
                <Image
                    src={noProjectYet}
                    alt="Sem projetos ainda"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}
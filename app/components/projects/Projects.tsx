"use client"

import { useStoreUser } from '@/app/data/user/storeUser';
import { emptyListOf, listIsNotEmpty } from '@/app/lib/utils';
import AddButton from '@/app/ui/buttons/AddButton';
import Modal from '@/app/ui/modals/Modal';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import EmptyProjects from './no-projects/EmptyProjects';
import ListProjects from './list-of-projects/ListProjects';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { projects } = useStoreUser()

    const handleAddProject = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Meus Projetos</h2>
                <AddButton title={"Novo projeto"} onClick={handleAddProject} />
            </div>

            <div className="flex items-center mb-4">
                <SearchOutlinedIcon className="h-6 w-6 text-gray-500" />
                <input
                    type="text"
                    placeholder="Faça sua busca..."
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {emptyListOf(projects) && <EmptyProjects />}
            {listIsNotEmpty(projects) && <ListProjects />}


            {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleModalClose} />}
        </div>
    );
}
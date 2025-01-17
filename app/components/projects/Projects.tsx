"use client"

import { useStoreUser } from '@/app/data/user/storeUser';
import { emptyListOf, listIsNotEmpty } from '@/app/lib/utils';
import DefaultBalloon from '@/app/ui/balloons/DefaultBalloon';
import AddButton from '@/app/ui/buttons/AddButton';
import Modal from '@/app/ui/modals/Modal';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Image from 'next/image';
import { useState } from 'react';
import arrow from '../../../public/img/arrow.png';
import ListProjects from './list-of-projects/ListProjects';
import EmptyProjects from './no-projects/EmptyProjects';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { projects } = useStoreUser()

    const filteredProjects = projects.filter((project) => project.toLowerCase().includes(searchTerm.toLowerCase()))

    const handleAddProject = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="bg-white p-4 rounded-lg">
            <div className='flex flex-row items-center gap-2 mb-4'>
                <FolderOpenIcon className='text-[32px]' />
                <h2 className="text-[32px] font-normal leading-[48px] font-poppins">Meus Projetos</h2>
            </div>

            <div className='flex flex-row items-center gap-4 w-full'>
                <input
                    type="text"
                    placeholder="Faça sua busca..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-purple"
                />
                <AddButton title={"Novo projeto"} onClick={handleAddProject} />
            </div>

            {emptyListOf(projects) && <DefaultBalloon />}
            {emptyListOf(projects) && <Image src={arrow} alt="arrow" className='fixed top-[180px] right-[160px]' />}
            {emptyListOf(projects) && <EmptyProjects />}

            {listIsNotEmpty(projects) && <ListProjects filteredProjects={filteredProjects} />}

            {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleModalClose} />}
        </div>
    );
}
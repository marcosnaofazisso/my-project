"use client"

import { useStoreUser } from '@/app/data/user/storeUser';
import { emptyListOf, listIsNotEmpty } from '@/app/lib/utils';
import AddButton from '@/app/ui/buttons/AddButton';
import Modal from '@/app/ui/modals/Modal';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SearchIcon from '@mui/icons-material/Search';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import ListProjects from './list-of-projects/ListProjects';
import EmptyProjects from './no-projects/EmptyProjects';
import DefaultBalloon from '@/app/ui/balloons/DefaultBalloon';
import Image from 'next/image';
import arrow from '../../../public/img/arrow.png'

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
            <div className='flex flex-row items-center gap-2 mb-4'>
                <FolderOpenIcon className='text-[32px]' />
                <h2 className="text-[32px] font-normal leading-[48px] font-poppins">Meus Projetos</h2>
            </div>

            <div className='flex flex-row items-center gap-4 w-full'>
                <ListItem disablePadding className={`border gray rounded-md text-primary w-full `}>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Faça sua busca..." />
                    </ListItemButton>
                </ListItem>
                <AddButton title={"Novo projeto"} onClick={handleAddProject} />
            </div>

            {emptyListOf(projects) && <DefaultBalloon />}
            {emptyListOf(projects) && <Image src={arrow} alt="arrow" className='fixed top-[180px] right-[160px]'/>}
            {emptyListOf(projects) && <EmptyProjects />}
            {listIsNotEmpty(projects) && <ListProjects />}

            {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleModalClose} />}
        </div>
    );
}
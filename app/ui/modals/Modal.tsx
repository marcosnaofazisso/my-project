"use client"

import { useStoreUser } from '@/app/data/user/storeUser';
import CloseIcon from '@mui/icons-material/Close';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import DefaultButton from '../buttons/DefaultButton';
import OutlinedButton from '../buttons/OutlinedButton';
import TitleMedium from '../titles/TitleMedium';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {

    const projectNameRef = useRef<HTMLInputElement>(null);
    const { addProject, isProjectAlreadyAdded } = useStoreUser();
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddProject = () => {
        if (projectNameRef.current) {
            const newProjectName = projectNameRef?.current?.value?.toLowerCase();
            if (isProjectAlreadyAdded(newProjectName)) {
                setErrorMessage("Esse projeto já existe na sua lista.");
            } else {
                addProject(newProjectName);
                setErrorMessage("");
                onClose();
            }
        }
    };


    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm ">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-[600px] max-h-[260px] w-full h-full ">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-2 items-center">
                        <FolderOpenIcon />
                        <TitleMedium title="Novo Projeto" />
                    </div>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <div className="mb-4">
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        ref={projectNameRef}
                        placeholder='Nome do projeto'
                        className="mt-1 p-2 w-full border rounded-md focus:border-purple focus:ring-purple"
                    />
                    {errorMessage && (
                        <p className="text-red-500 mt-2 text-sm">
                            {errorMessage}
                        </p>
                    )}
                </div>

                <div className="flex justify-end gap-2">
                    <OutlinedButton title="Cancelar" onClick={onClose} />
                    <DefaultButton title='Criar' onClick={handleAddProject} />
                </div>
            </div>
        </div>
    )
}
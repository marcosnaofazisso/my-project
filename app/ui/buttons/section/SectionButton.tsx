"use client"

import { useStoreUser } from '@/app/data/user/storeUser';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import React, { useRef, useState } from 'react';
import DefaultButton from '../DefaultButton';
import OutlinedButton from '../OutlinedButton';

interface SectionButtonProps {
    projectName: string;
}

export default function SectionButton({ projectName }: SectionButtonProps): React.ReactElement {
    const [selected, setSelected] = useState(false);
    const { addSectionToProject } = useStoreUser();
    const sectionNameRef = useRef<HTMLInputElement>(null);

    const handleAddSection = () => {
        if (sectionNameRef.current) {
            const sectionName = sectionNameRef.current.value;
            addSectionToProject(projectName, { name: sectionName })
        }
        setSelected(false)
    };

    const handleCancel = () => {
        setSelected(false)
    };

    return (
        <div className='mt-9'>
            {!selected ? (
                <div
                    className={`flex flex-row gap-4 p-4 border gray rounded-md w-full max-w-[293px] h-10 items-center justify-start bg-purpleLight text-purple hover:cursor-pointer hover:bg-purpleMedium`}
                    onClick={() => setSelected(true)}
                >
                    <AllInboxOutlinedIcon />
                    <span className="text-sm leading-6">Adicionar Seção</span>
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-4 border gray rounded-md w-full max-w-[293px] items-center justify-start">
                    <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                        ref={sectionNameRef}
                        placeholder="Digite o nome da seção"
                    />
                    <div className='flex flex-row'>
                        <DefaultButton title='Adicionar' onClick={handleAddSection} />
                        <OutlinedButton title='Cancelar' onClick={handleCancel} />
                    </div>
                </div>
            )}
        </div>
    );
}

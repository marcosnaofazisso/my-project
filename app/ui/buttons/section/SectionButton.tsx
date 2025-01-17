import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import React from 'react';

interface SectionButtonProps {
    onClick?: VoidFunction;
}

export default function SectionButton({ onClick }: SectionButtonProps): React.ReactElement {
    return (
        <div
            className={`flex flex-row gap-4 p-4 border gray rounded-md w-full max-w-[293px] h-10 items-center justify-start bg-purpleLight text-purple hover:cursor-pointer hover:bg-purpleMedium`}
            onClick={onClick}>
            <AllInboxOutlinedIcon />
            <span className="text-sm leading-6">Adicionar Seção</span>
        </div>
    );
}
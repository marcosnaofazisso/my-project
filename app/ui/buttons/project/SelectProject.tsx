import React from 'react';

interface SelectProjectProps {
    title: string;
    icon?: React.ReactElement | null;
    isSelected: boolean;
    onClick?: VoidFunction;
}

export default function SelectProjectButton({ title, icon, isSelected, onClick }: SelectProjectProps): React.ReactElement {
    return (
        <div
            className={`flex flex-row gap-4 p-4 border gray rounded-md w-full max-w-[293px] h-10 items-center justify-start bg-white ${isSelected ? 'bg-purpleLight text-purple' : ''} hover:bg-purpleLight hover:text-purple hover:cursor-pointer`}
            onClick={onClick}>
            {icon}
            <span className="text-sm leading-6">{title}</span>
        </div>
    );
}
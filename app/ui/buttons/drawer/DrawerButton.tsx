import React from 'react';

interface DrawerButtonProps {
    title: string;
    icon?: React.ReactElement | null;
    isSelected: boolean;
    onClick?: VoidFunction;
}

export default function DrawerButton({ title, icon, isSelected, onClick }: DrawerButtonProps): React.ReactElement {
    return (
        <div
            className={`flex flex-row gap-4 p-4 border gray rounded-md w-full max-w-[293px] h-10 items-center justify-start ${isSelected ? 'bg-purpleLight text-purple' : ''} hover:bg-purpleLight hover:text-purple hover:cursor-pointer`}
            onClick={onClick}>
            {icon}
            <span className="text-sm leading-6">{title}</span>
        </div>
    );
}
import React from 'react';

interface ButtonProps {
    title: string;
    icon?: React.ReactNode;
    onClick?: VoidFunction
}

export default function DefaultButton({ title, icon, onClick }: ButtonProps) {
    return (
        <button className="flex justify-center items-center bg-purple text-white px-4 py-2 rounded-md hover:bg-purpleDark w-full text-center max-w-[102px]" onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {title}
        </button>
    );
}
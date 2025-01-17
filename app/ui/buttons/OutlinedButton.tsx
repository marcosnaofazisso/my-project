import React from 'react'

interface ButtonProps {
    title: string
    icon?: React.ReactNode
    onClick?: VoidFunction
}

export default function OutlinedButton({ title, icon, onClick }: ButtonProps) {
    return (
        <button className="flex justify-center items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 w-full max-w-[102px]" onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {title}
        </button>
    )
}
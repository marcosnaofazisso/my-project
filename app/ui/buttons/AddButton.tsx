import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface ButtonProps {
    title: string;
    onClick?: VoidFunction
}

export default function AddButton({ title, onClick }: ButtonProps) {
    return (
        <button className="bg-purple text-white px-4 py-2 rounded-md hover:bg-purpleDark flex items-center" onClick={onClick}>
            {title}
            <AddOutlinedIcon />
        </button>
    );
}
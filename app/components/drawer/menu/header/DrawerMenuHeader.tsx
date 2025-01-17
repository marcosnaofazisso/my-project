"use client"

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import profileIcon from '../../../../../public/img/profile.png';

interface DrawerMenuProps {
    handleDrawerToggle: VoidFunction;
}

export default function DrawerMenuHeader({ handleDrawerToggle }: DrawerMenuProps): React.ReactNode {
    return (
        <div className={`flex flex-row items-center gap-2 text-primary`}>
            <Image
                src={profileIcon}
                alt="profile image"
                width={40}
                height={40}
                className="rounded-full"
            />
            <p className="col-gray">Nome do usuário</p>
            <KeyboardArrowDownOutlinedIcon/>
            <NotificationsNoneOutlinedIcon />
            <IconButton>
                <AutoAwesomeMosaicOutlinedIcon onClick={handleDrawerToggle} />
            </IconButton>
        </div>
    );
}
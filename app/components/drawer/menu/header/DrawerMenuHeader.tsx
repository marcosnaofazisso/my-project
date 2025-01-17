"use client"

import { useDrawerStore } from '@/app/data/drawer/storeDrawer';
import { useStoreUser } from '@/app/data/user/storeUser';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import profileIcon from '../../../../../public/img/profile.png';
import { useRouter } from 'next/navigation';
import { PATH_TO } from '@/app/routes/globalRoutes';

export default function DrawerMenuHeader(): React.ReactNode {

    const router = useRouter()
    const { name } = useStoreUser()
    const { toggleDrawer } = useDrawerStore()

    return (
        <div className={`flex flex-row items-center gap-2 text-primary`}>
            <Image
                src={profileIcon}
                alt="profile image"
                width={40}
                height={40}
                className="rounded-full"
            />
            <p className="col-gray">{name ? name : "Visitante"}</p>
            <KeyboardArrowDownOutlinedIcon />
            <div className='ml-auto gap-2'>
                <NotificationsNoneOutlinedIcon className='hover:text-purple hover:cursor-pointer' onClick={() => router.push(PATH_TO.notifications)} />
                <IconButton onClick={toggleDrawer} className='z-99 hover:text-purple hover:cursor-pointer'>
                    <AutoAwesomeMosaicOutlinedIcon />
                </IconButton>
            </div>
        </div>
    );
}
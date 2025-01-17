"use client"

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { IconButton } from '@mui/material';

import { useDrawerStore } from '@/app/data/drawer/storeDrawer';
import DrawerMenu from './menu/DrawerMenu';

export default function DrawerWrapper({ children }: Readonly<{ children: React.ReactNode }>) {

    const { toggleDrawer } = useDrawerStore()

    return (
        <div className="flex">
            <DrawerMenu />
            <div className="w-full p-4">
                <div className='flex flex-row items-center gap-2 p-4'>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className='fixed top-4 left-8 p-3 hover:text-purple'
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                    >
                        <AutoAwesomeMosaicOutlinedIcon className='text-primary' />
                    </IconButton>
                </div>
                {children}
            </div>
        </div>
    );
}
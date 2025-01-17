"use client"

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';

import Image from 'next/image';
import profileIcon from '../../../public/img/profile.png';
import DrawerMenu from './menu/DrawerMenu';

export default function DrawerWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="flex">
            <DrawerMenu isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
            <div className="w-full p-4">
                <div className='flex flex-row items-center gap-2 p-4'>
                    <IconButton
                        edge="start"
                        className="gray"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{
                            position: 'fixed',
                            top: 8,
                            left: 8,
                        }}>
                        <Image
                            src={profileIcon}
                            alt="profile image"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <AutoAwesomeMosaicOutlinedIcon className='text-primary' />
                    </IconButton>
                </div>
                {children}
            </div>
        </div>
    );
}
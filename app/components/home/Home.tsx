"use client"

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { Button, IconButton } from '@mui/material';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import DrawerMenu from '../menu/DrawerMenu';
import { mainColors } from '@/app/styles/globalStyles';

import Image from 'next/image';
import profileIcon from '../../../public/img/profile.png';

export default function Home() {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                        className={mainColors.grey}
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
                        <AutoAwesomeMosaicOutlinedIcon />
                    </IconButton>
                </div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Button onClick={() => router.push("/blog")}>Go to blog</Button>
            </div>
        </div>
    );
}
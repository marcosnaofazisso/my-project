"use client"

import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from '@mui/material';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import DrawerMenu from '../menu/DrawerMenu';

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
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    sx={{
                        position: 'fixed',
                        top: 8,
                        left: 8,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Button onClick={() => router.push("/blog")}>Go to blog</Button>
            </div>
        </div>
    );
}
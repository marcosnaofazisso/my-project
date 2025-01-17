"use client"

import { PATH_TO } from '@/app/routes/globalRoutes';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FolderIcon from '@mui/icons-material/Folder';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import DrawerMenuHeader from './header/DrawerMenuHeader';
import { menuContentMaxWidth, menuDefaultWidth } from './header/styles';

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import profileIcon from '../../../../public/img/profile.png';

interface DrawerMenuProps {
    isDrawerOpen: boolean;
    handleDrawerToggle: VoidFunction;
}

export default function DrawerMenu({ isDrawerOpen, handleDrawerToggle }: DrawerMenuProps): React.ReactNode {

    const router = useRouter();

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
            sx={{
                width: menuDefaultWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: menuDefaultWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List className="pt-4 pl-4">
            <div className={`flex flex-row items-center gap-2 text-primary`}>
            <Image
                src={profileIcon}
                alt="profile image"
                width={40}
                height={40}
                className="rounded-full"
            />
            <p className="col-gray">Nome do usuário</p>
            <KeyboardArrowDownOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <IconButton>
                <AutoAwesomeMosaicOutlinedIcon onClick={() => handleDrawerToggle()} />
            </IconButton>
        </div>
                {/* <DrawerMenuHeader handleDrawerToggle={handleDrawerToggle} /> */}

                <div className={`pt-5 max-w-[${menuContentMaxWidth}]`}>
                    <ListItem disablePadding className={`border gray rounded-md`}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Faça sua busca..." />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CalendarTodayIcon />
                            </ListItemIcon>
                            <ListItemText primary="Hoje" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => router.push(PATH_TO.projects)}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Meus Projetos" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => router.push(PATH_TO.projects)}>
                            <ListItemIcon>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Meus Projetos" />
                        </ListItemButton>
                    </ListItem>

                </div>

            </List>
        </Drawer>
    );
}
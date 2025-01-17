"use client"

import { useDrawerStore } from '@/app/data/drawer/storeDrawer';
import { PATH_TO } from '@/app/routes/globalRoutes';
import DrawerButton from '@/app/ui/buttons/DrawerButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import DrawerMenuHeader from './header/DrawerMenuHeader';
import { drawerCustomStyles } from './styles';

export default function DrawerMenu(): React.ReactNode {

    const router = useRouter()
    const pathname = usePathname()
    const { isDrawerOpen } = useDrawerStore()

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
            sx={drawerCustomStyles}>
            <List className="pt-4 pl-4">

                <DrawerMenuHeader />

                <div className={`pt-5 max-w-[293px]`}>
                    <ListItem disablePadding className={`border gray rounded-md text-primary`}>
                        <ListItemButton>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Faça sua busca..." />
                        </ListItemButton>
                    </ListItem>

                    <DrawerButton title="Hoje" icon={<CalendarTodayIcon />} isSelected={pathname ==="/"} onClick={() => router.push(PATH_TO.home)} />
                    <DrawerButton title="Meus Projetos" icon={<FolderOpenOutlinedIcon />} isSelected={pathname ==="/projetos"} onClick={() => router.push(PATH_TO.projects)} />
                </div>
            </List>
        </Drawer>
    );
}
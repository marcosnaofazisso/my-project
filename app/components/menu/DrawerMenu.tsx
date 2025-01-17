import HomeIcon from '@mui/icons-material/Home';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { menuDefaultWidth } from './styles';

interface DrawerMenuProps {
    isDrawerOpen: boolean;
    handleDrawerToggle: VoidFunction;
}

export default function DrawerMenu({ isDrawerOpen, handleDrawerToggle }: DrawerMenuProps): React.ReactNode {

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
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => handleDrawerToggle()}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}
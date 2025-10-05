import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ModeSwitch from '@/components/ModeSwitch';

const drawerWidth = 240;
type NavItem = { text: string, href: string };
type NavItems = { [key: string]: NavItem };
const navItems: NavItems = {
    home: {
        text: 'Home',
        href: '/',
    },
    about: {
        text: 'About',
        href: '/about',
    },
    contact: {
        text: 'Contact',
        href: '/contact',
    }
};

export default function DrawerAppBar(props: { children?: React.ReactNode, title?: string | "Hot Club Of Nowhere" }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {props.title}
            </Typography>
            <Divider />
            <List>
                {Object.keys(navItems).map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton href={navItems[item].href} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={navItems[item].text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar sx={{ justifyContent: 'flex-end' }}>
                    <Box sx={{ flexGrow: { xs: 0, sm: 2 } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { sm: 'none' }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box flexGrow={1}>
                        <Typography variant="h5" component="div">
                            <strong>{props.title}</strong>
                        </Typography>
                    </Box>
                    <Box display='flex' sx={{ display: { xs: 'none', sm: 'block', flexGrow: 0, justifyContent: 'space-evenly' } }}>
                        {Object.keys(navItems).map((item) => (
                            <Button key={item} href={navItems[item].href} sx={{ display: 'inline-flex', color: 'inherit' }}>
                                {navItems[item].text}
                            </Button>
                        ))}
                        {props.children}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box>
                <Toolbar />
            </Box>
        </Box>
    );
}


import React from 'react';

// Libraries
// MUI
import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '~/theme/theme';

// Components
// Types
// Ducks
// Utils
// Contexts
// Services
// Styles

const NavBar = () => {
    return (
        <AppBar 
            elevation={10}
            sx={{ bgcolor: theme.palette.gray.main }}
        >
            <Toolbar>Hello</Toolbar>
        </AppBar>
    );
};

export default NavBar;
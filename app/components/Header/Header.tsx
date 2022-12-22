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
import logo from '../../assets/logo-icon.svg';
// Contexts
// Services
// Styles
import { makeStyles, withStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    appBar: {
        backgroundColor: theme.palette.gray.main
        , height: 100
        , justifyContent: 'center'
    }
} );


const Header = () => {
    const { classes } = useStyles();

    return (
        <AppBar 
            elevation={ 8 }
            className={ classes.appBar }
        >
            <Toolbar>
                <img 
                    alt="AVJ logo"
                    src={logo}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
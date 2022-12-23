import React from 'react';

// Libraries
// MUI
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '~/theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import NavBar from './NavBar/NavBar';
// Types
// Ducks
// Utils
import logo from '../../assets/logo-icon.svg';
// Contexts
// Services
// Styles
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    appBar: {
        backgroundColor: theme.palette.gray.main
        , height: 100
        , justifyContent: 'center'
    }
    , navBar: {
        marginLeft: 'auto'
    }
} );


const Header = () => {
    const { classes } = useStyles();
    const isSmScreen = useMediaQuery( theme.breakpoints.down( 'sm' ) );
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

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

                { !isSmScreen && 
                    <Typography 
                        variant={isSmScreen ? 'h4' : 'h3'}
                        marginLeft='1rem'
                        alignSelf='flex-end'
                    >
                        Alex Johnson
                    </Typography>
                }
                { !isMdScreen && 
                    <NavBar className={ classes.navBar }/> 
                }
                { isMdScreen && 
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <MenuIcon 
                            sx={{ 
                                color: theme.palette.common.white
                                , width: '3rem'
                                , height: '3rem'
                            }}
                        />
                    </IconButton>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Header;
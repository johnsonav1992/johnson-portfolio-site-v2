import React, { useContext } from 'react';

// Libraries
import { useNavigate } from '@remix-run/react';

// MUI
import { 
    AppBar
    , Toolbar
    , IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import theme from '~/theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import NavBar from './NavBar/NavBar';
import SideDrawer from '../Drawer/SideDrawer';

// Utils
import logo from '../../assets/logo-icon.svg';

// Contexts
import { siteContext } from '~/context/context';

// Styles
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    appBar: {
        backgroundColor: theme.palette.gray.main
        , height: 100
        , justifyContent: 'center'
        , position: 'sticky'
    }
    , navBar: {
        marginLeft: 'auto'
    }
    , logo: {
        '&:hover': {
            cursor: 'pointer'
        }
        , boxShadow: '0px 1px 10px rgb(0 0 0 / 70%)'
    }
} );

const Header = () => {
    const { classes } = useStyles();
    const isSmScreen = useMediaQuery( theme.breakpoints.down( 'sm' ) );
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const { 
        setActiveTab
        , setDrawerIsOpen
        , drawerIsOpen
    } = useContext( siteContext );
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setDrawerIsOpen( !drawerIsOpen );
    };

    return (
        <>
            <AppBar 
                elevation={ 8 }
                className={ classes.appBar }
            >
                <Toolbar>
                    <img 
                        alt="AVJ logo"
                        src={logo}
                        onClick={ () => {
                            setActiveTab( null );
                            navigate( '/' );
                        }}
                        className={ classes.logo }
                    />
                    {/* { !isSmScreen && 
                    <Typography 
                        variant={isSmScreen ? 'h4' : 'h3'}
                        marginLeft='1rem'
                        alignSelf='flex-end'
                    >
                        Alex Johnson
                    </Typography>
                    } */}
                    { !isMdScreen && 
                    <NavBar className={ classes.navBar }/> 
                    }
                    { isMdScreen && 
                    <IconButton 
                        sx={{ marginLeft: 'auto' }}
                        onClick={ toggleDrawer }
                    >
                        { !drawerIsOpen ? 
                        
                            <MenuIcon 
                                sx={{ 
                                    color: theme.palette.common.white
                                    , width: '3rem'
                                    , height: '3rem'
                                }}
                            />
                            :
                            <CloseIcon 
                                sx={{ 
                                    color: theme.palette.common.white
                                    , width: '3rem'
                                    , height: '3rem'
                                    , '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            />
                        }
                    </IconButton>
                    }
                </Toolbar>
            </AppBar>
            <SideDrawer />
        </>
    );
};

export default Header;
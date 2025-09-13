// Libraries
import { useNavigate } from 'react-router';

// MUI
import { 
    AppBar
    , Toolbar
    , IconButton
    , useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

// Components
import NavBar from './NavBar/NavBar';
import SideDrawer from '../Drawer/SideDrawer';

// Utils
import logo from '../../assets/logo-icon.svg';

// Contexts
import { useSiteContext } from '~/context/context';

// Theme
import theme from '~/theme/theme';

// Styles
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    appBar: {
        backgroundColor: theme.palette.gray.main
        , height: 100
        , justifyContent: 'center'
        , position: 'sticky'
        , zIndex: theme.zIndex.drawer + 1
        , borderRadius: 0
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
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const { 
        setActiveTab
        , setDrawerIsOpen
        , drawerIsOpen
    } = useSiteContext();
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
                            setActiveTab( '/' );
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
                        sx={ { ml: 'auto' } }
                        onClick={ toggleDrawer }
                    >
                        { !drawerIsOpen ? 
                            <MenuIcon 
                                sx={{ 
                                    color: ( theme ) => theme.palette.common.white
                                    , width: '3rem'
                                    , height: '3rem'
                                }}
                            />
                            :
                            <CloseIcon 
                                sx={{ 
                                    color: ( theme ) => theme.palette.common.white
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
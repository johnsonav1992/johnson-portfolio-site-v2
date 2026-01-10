'use client';

// Libraries
import { useRouter } from 'next/navigation';

// MUI
import {
    AppBar
    , Toolbar
    , IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import NavBar from './NavBar/NavBar';
import SideDrawer from '../Drawer/SideDrawer';

// Utils
import logo from '../../assets/logo-icon.svg';

// Contexts
import { useSiteContext } from '~/context/context';

// Theme
import theme from '~/theme/theme';

const Header = () => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const {
        setActiveTab
        , setDrawerIsOpen
        , drawerIsOpen
    } = useSiteContext();
    const router = useRouter();

    const toggleDrawer = () => {
        setDrawerIsOpen( !drawerIsOpen );
    };

    return (
        <>
            <AppBar
                elevation={ 8 }
                sx={ {
                    backgroundColor: theme.palette.gray.main
                    , height: 100
                    , justifyContent: 'center'
                    , position: 'fixed'
                    , zIndex: theme.zIndex.drawer + 1
                    , borderRadius: 0
                } }
            >
                <Toolbar>
                    <img
                        alt="AVJ logo"
                        src={ typeof logo === 'string' ? logo : (logo as any).src }
                        onClick={ () => {
                            setActiveTab( '/' );
                            router.push( '/' );
                        }}
                        style={ {
                            cursor: 'pointer'
                            , boxShadow: '0px 1px 10px rgb(0 0 0 / 70%)'
                        } }
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
                    <NavBar sx={ { marginLeft: 'auto' } }/>
                    }
                    { isMdScreen &&
                    <IconButton
                        sx={ { ml: 'auto' } }
                        onClick={ toggleDrawer }
                    >
                        <MenuIcon
                            sx={{
                                color: ( theme ) => theme.palette.common.white
                                , width: '3rem'
                                , height: '3rem'
                            }}
                        />
                    </IconButton>
                    }
                </Toolbar>
            </AppBar>
            <SideDrawer />
        </>
    );
};

export default Header;
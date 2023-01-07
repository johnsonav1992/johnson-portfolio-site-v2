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
import theme from '~/theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import NavBar from './NavBar/NavBar';

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
    const { setActiveTab } = useContext( siteContext );
    const navigate = useNavigate();

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
        </>
    );
};

export default Header;
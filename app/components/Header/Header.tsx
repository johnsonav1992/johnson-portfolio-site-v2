import React from 'react';

// Libraries
// MUI
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
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
import { makeStyles } from 'tss-react/mui';

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
                <Grid 
                    container
                    spacing={ 2 }
                >
                    <Grid item>
                        <img 
                            alt="AVJ logo"
                            src={logo}
                        />
                    </Grid>
                    <Grid 
                        container
                        item
                        xs={ 6 }
                        alignItems='center'
                    >
                        <Typography variant='h3'>
                            Alex Johnson
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
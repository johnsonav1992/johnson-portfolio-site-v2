import React, { useContext } from 'react';

// Libraries
import { Link } from '@remix-run/react';

// MUI
import { 
    SwipeableDrawer
    , List
    , ListItemButton
    , ListItemText
    , Typography
    , Box
} from '@mui/material';

// Contexts
import { siteContext } from '~/context/context';

// Data
import { tabs } from '~/data/tabs';

// Styles
import { makeStyles } from 'tss-react/mui';
import theme from '~/theme/theme';

const useStyles = makeStyles()( {
    drawerPaper: {
        width: 150
        , top: theme.mixins.toolbar.minHeight
        , overflow: 'auto'
        , height: '100vh'
    }
} );

const SideDrawer = () => {
    const { classes } = useStyles();
    const {
        drawerIsOpen
        , setDrawerIsOpen
    } = useContext( siteContext );

    return (
        <SwipeableDrawer 
            onClose={ () => setDrawerIsOpen( false ) }
            onOpen={ () => setDrawerIsOpen( true ) }
            open={ drawerIsOpen }
            anchor='right'
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <Box sx={ { ...theme.mixins.toolbar } }/>
            <List>
                { tabs.map( tab => 
                    <ListItemButton 
                        key={ tab.label }
                        component={ Link }
                        to={ tab.link }
                        onClick={ () => setDrawerIsOpen( false )}
                    >
                        <ListItemText>
                            <Typography variant='body1'>
                                { tab.label }
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                )}
            </List>
        </SwipeableDrawer>
    );
};

export default SideDrawer;
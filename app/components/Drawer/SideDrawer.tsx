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

// Theme
import theme from '~/theme/theme';

// Styles
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    drawerPaper: {
        width: 150
        , top: theme.mixins.toolbar.minHeight
        , overflow: 'auto'
        , height: '100vh'
    }
    , selected: {
        '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main
            , '&:hover': {
                backgroundColor: theme.palette.primary.dark
            }
        }
    }
} );

const SideDrawer = () => {
    const { classes } = useStyles();
    const {
        drawerIsOpen
        , setDrawerIsOpen
        , activeTab
        , setActiveTab
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
                        selected={ activeTab === tab.link }
                        onClick={ () => {
                            setDrawerIsOpen( false );
                            setActiveTab( tab.link );
                        } }
                        classes={ { selected: classes.selected } }
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
import React, { useContext } from 'react';

// Libraries
import { Link } from '@remix-run/react';

// MUI
import { 
    SwipeableDrawer
    , List
    , ListItemButton
    , ListItemText,
    Typography
} from '@mui/material';

// Contexts
import { siteContext } from '~/context/context';

// Data
import { tabs } from '~/data/tabs';

const SideDrawer = () => {
    const {
        drawerIsOpen
        , setDrawerIsOpen
    } = useContext( siteContext );

    return (
        <SwipeableDrawer 
            onClose={ () => setDrawerIsOpen( false ) }
            onOpen={ () => setDrawerIsOpen( true ) }
            open={ drawerIsOpen }
        >
            <List>
                { tabs.map( tab => 
                    <ListItemButton 
                        key={ tab.label }
                        component={ Link }
                        to={ tab.link }
                        onClick={ () => setDrawerIsOpen( false )}
                    >
                        <ListItemText>
                            <Typography variant='body1' color='primary'>
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
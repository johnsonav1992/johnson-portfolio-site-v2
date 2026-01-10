'use client';

// Libraries
import Link from 'next/link';

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
import { useSiteContext } from '~/context/context';

// Data
import { tabs } from '~/data/tabs';

// Theme
import theme from '~/theme/theme';

const SideDrawer = () => {
    const {
        drawerIsOpen
        , setDrawerIsOpen
        , activeTab
        , setActiveTab
    } = useSiteContext();

    return (
        <SwipeableDrawer
            onClose={ () => setDrawerIsOpen( false ) }
            onOpen={ () => setDrawerIsOpen( true ) }
            open={ drawerIsOpen }
            anchor='right'
            disableBackdropTransition
            sx={ {
                '& .MuiDrawer-paper': {
                    width: 150
                    , top: theme.mixins.toolbar.minHeight
                    , overflow: 'auto'
                    , height: '100vh'
                }
            } }
        >
            <Box sx={ { ...theme.mixins.toolbar } }/>
            <List>
                { tabs.map( tab =>
                    <ListItemButton
                        key={ tab.label }
                        component={ Link }
                        href={ tab.link }
                        selected={ activeTab === tab.link }
                        onClick={ () => {
                            setDrawerIsOpen( false );
                            setActiveTab( tab.link );
                        } }
                        sx={ {
                            '&.Mui-selected': {
                                backgroundColor: theme.palette.primary.main
                                , '&:hover': {
                                    backgroundColor: theme.palette.primary.dark
                                }
                            }
                        } }
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
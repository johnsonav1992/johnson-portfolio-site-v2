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
    , IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
                zIndex: theme.zIndex.drawer + 2
                , '& .MuiDrawer-paper': {
                    width: 150
                    , overflow: 'auto'
                    , height: '100vh'
                    , backgroundColor: theme.palette.gray.main
                    , borderRadius: 0
                }
            } }
        >
            <Box
                sx={ {
                    display: 'flex'
                    , justifyContent: 'flex-end'
                    , alignItems: 'flex-start'
                    , paddingTop: '0.5rem'
                    , paddingRight: '0.5rem'
                    , paddingBottom: '0.5rem'
                } }
            >
                <IconButton
                    onClick={ () => setDrawerIsOpen( false ) }
                >
                    <CloseIcon
                        sx={{
                            color: theme.palette.common.white
                            , width: '2rem'
                            , height: '2rem'
                        }}
                    />
                </IconButton>
            </Box>
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
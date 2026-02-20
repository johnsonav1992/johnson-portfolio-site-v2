'use client';

// Libraries
import Link from 'next/link';

// MUI
import type {
    Theme
    , SxProps
} from '@mui/material';
import {
    Tab
    , Tabs
} from '@mui/material';

// Utils
import { tabs } from '../../../data/tabs';

// Contexts
import { useSiteContext } from '~/context/context';

interface Props {
    sx?: SxProps<Theme>;
}

const NavBar = ( { sx }: Props ) => {
    const { activeTab } = useSiteContext();

    const tabStyle = ( theme: Theme ) => ( {
        color: theme.palette.common.white
        , textTransform: 'none'
        , fontSize: '1.2rem'
        , '&:hover': {
            color: theme.palette.grey[ 400 ]
        }
        , '&.Mui-selected': {
            color: theme.palette.grey[ 400 ]
        }
        , display: 'flex'
        , justifyContent: 'center'
    } );

    const hidden = ( theme: Theme ) => ( {
        ...tabStyle( theme )
        , opacity: 0
        , pointerEvents: 'none'
    } );

    return (
        <Tabs
            sx={ sx }
            value={ activeTab || false }
            TabIndicatorProps={ {
                style: {
                    backgroundColor: 'transparent'
                } } }
        >
            { tabs.map( tab => {
                return <Tab
                    component={ Link }
                    key={ tab.link }
                    value={ tab.link }
                    label={ tab.label }
                    href={tab.link}
                    sx={
                        tab.hidden
                            ? hidden
                            : tabStyle
                    }
                    disableRipple
                />;
            } )}
        </Tabs>
    );
};

export default NavBar;
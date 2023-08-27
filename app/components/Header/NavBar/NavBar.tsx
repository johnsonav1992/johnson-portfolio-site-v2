// Libraries
import { Link } from '@remix-run/react';

// MUI
import type {
    Theme
} from '@mui/material';
import { 
    Tab
    , Tabs
} from '@mui/material';

// Utils
import { tabs } from '../../../data/tabs';

// Contexts
import { useSiteContext } from '~/context/context';

// Types
import type { SyntheticEvent } from 'react';

interface Props {
    className?: string;
}

const NavBar = ( { className }: Props ) => {
    const { 
        activeTab
        , setActiveTab
    } = useSiteContext();
    
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

    const hidden = {
        ...tabStyle
        , opacity: 0
        , pointerEvents: 'none' 
    };
    
    const handleChange = ( e: SyntheticEvent<Element, Event>, value: string ) => {
        setActiveTab( value );
    };
    
    return (
        <Tabs 
            className={ className } 
            value={ activeTab }
            onChange={ handleChange }
            TabIndicatorProps={{ 
                style: { 
                    backgroundColor: 'transparent'
                } }}
        >
            { tabs.map( tab => {
                return <Tab 
                    component={ Link }
                    key={ tab.link } 
                    value={ tab.link } 
                    label={ tab.label }
                    to={tab.link}
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
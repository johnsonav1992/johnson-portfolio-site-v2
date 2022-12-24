import React, { useContext } from 'react';
import type { SyntheticEvent } from 'react';

// MUI
import { 
    Tab
    , Tabs
} from '@mui/material';

// Utils
import { tabs } from '../../../data/tabs';

// Contexts
import { siteContext } from '~/context/context';

// Styles
import theme from '~/theme/theme';

interface Props {
    className?: string;
}

const NavBar = ( { className }: Props ) => {
    const { 
        activeTab
        , setActiveTab
    } = useContext( siteContext );
    
    const tabStyle = {
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
    };
    
    const handleChange = ( e: SyntheticEvent<Element, Event>, value: number ) => {
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
                    key={tab.value} 
                    value={tab.value} 
                    label={tab.label} 
                    sx={ tabStyle }
                    disableRipple
                />;
            } )}
            
        </Tabs>
    );
};

export default NavBar;
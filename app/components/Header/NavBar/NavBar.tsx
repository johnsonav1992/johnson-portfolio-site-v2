import { Tab, Tabs } from '@mui/material';
import React from 'react';

// Libraries
// MUI

// Components
// Types
// Ducks
// Utils
// Contexts
// Services
// Styles
import theme from '~/theme/theme';

interface Props {
    className?: string;
}

const NavBar = ( { className }: Props ) => {

    const tabs = [
        {
            label: 'About'
            , value: 'about'
        }
        , {
            label: 'Skills'
            , value: 'skills'
        } 
        , {
            label: 'Work'
            , value: 'work'
        }
        , {
            label: 'Contact'
            , value: 'contact'
        }
    ];

    return (
        <Tabs className={ className }>
            { tabs.map( tab => {
                return <Tab 
                    key={tab.value} 
                    value={tab.value} 
                    label={tab.label} 
                    sx={{ 
                        color: theme.palette.common.white 
                        , textTransform: 'none'
                        , fontSize: '1.2rem'
                    }}
                    disableRipple
                />;
            } )}
            
        </Tabs>
    );
};

export default NavBar;
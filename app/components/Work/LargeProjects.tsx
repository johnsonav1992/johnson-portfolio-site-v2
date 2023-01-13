import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , useMediaQuery
} from '@mui/material';
import WorkItem from './WorkItem';

// Styles
import theme from '~/theme/theme';

const LargeProjects = () => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid 
            item
            container
            direction='column'
            alignItems='center'
        >
            <Grid item>
                <Typography variant='h4'>
                        Large Projects/Websites
                </Typography>
            </Grid>
            <Grid
                item
                container
                sx={ { 
                    width: isMdScreen ? '100%' : '75%'
                    , marginTop: '1rem'
                } }
            >
                <WorkItem />
            </Grid>
        </Grid>
    );
};

export default LargeProjects;
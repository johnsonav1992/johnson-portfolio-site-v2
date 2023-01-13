import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , useMediaQuery
} from '@mui/material';
import WorkItem from './WorkItemComponent';

// Data 
import { largeProjects } from '~/data/work';

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
            sx={ {
                gap: '2rem'
            } }
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
                    width: isMdScreen ? '100%' : '90%'
                    , marginTop: '1rem'
                } }
            >
                { largeProjects.map( project => 
                    <WorkItem 
                        key={ project.id }
                        project={ project }
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default LargeProjects;
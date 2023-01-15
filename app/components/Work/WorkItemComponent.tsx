import React from 'react';

// MUI
import { 
    Box,
    Grid
    , Typography
    , useMediaQuery
} from '@mui/material';

// Types
import type { WorkItem } from '~/types/types';

// Styles
import theme from '~/theme/theme';

interface Props {
    project: WorkItem;
}

const WorkItemComponent = ( { project }: Props ) => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid 
            item
            container
            direction='column'
            alignItems='center'
            xs={ 12 }
            md={ 6 }
            sx={ {
                gap: '1rem'
            } }
        >
            <Grid 
                item 
                container 
                justifyContent='flex-start'
                sx={ {
                    width: isMdScreen ? '90%' : '30vw'
                } }
            >
                <Typography 
                    variant='h6'
                    sx={{ fontSize: 'clamp(1rem, -0.2857rem + 3.0476vw, 2rem)' }}
                >
                    { project.name }
                </Typography>
            </Grid>
            <img 
                src={ project.imgSrc }
                alt={ project.name }
                style={ {
                    width: isMdScreen ? '75vw' : '30vw'
                    , borderRadius: '0.5em'
                    // @ts-ignore
                    , boxShadow: theme.shadows[ 25 ]
                } }
            />
        </Grid>
    );
};

export default WorkItemComponent;
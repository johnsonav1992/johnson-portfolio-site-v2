import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , Avatar
} from '@mui/material';

// Types
import type { WorkItem } from '~/types/types';

// Styles
import theme from '~/theme/theme';

interface Props {
    project: WorkItem;
}

const WorkItemComponent = ( { project }: Props ) => {
    return (
        <Grid 
            item
            container
            direction='column'
            alignItems='center'
            xs={ 6 }
            sx={ {
                gap: '1rem'
            } }
        >
            <Grid 
                item 
                container 
                justifyContent='flex-start'
                sx={ {
                    width: '30vw'
                } }
            >
                <Typography variant='h5'>
                    { project.name }
                </Typography>
            </Grid>
            <img 
                src={ project.imgSrc } 
                alt={ project.name }
                style={ {
                    width: '30vw'
                    , height: '20vw'
                    , borderRadius: '0.5em'
                    // @ts-ignore
                    , boxShadow: theme.shadows[ 25 ]
                } }
            />
        </Grid>
    );
};

export default WorkItemComponent;
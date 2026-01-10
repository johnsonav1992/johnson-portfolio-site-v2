'use client';

import React from 'react';

// MUI
import {
    Divider
    , Typography
    , useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';
import WorkItemComponent from './WorkItemComponent';

// Data 
import { 
    largeProjects
    , smallProjects
} from '~/data/work';

// Theme
import theme from '~/theme/theme';

interface Props {
    projectType: string;
}

const ProjectList = ( { projectType }: Props ) => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            sx={ {
                gap: '2rem'
                , mb: '4rem'
            } }
        >
            <Grid>
                <Typography
                    variant={ isMdScreen ? 'h5' : 'h4' }
                >
                    {
                        projectType === 'large'
                            ? 'Large Projects/Websites'
                            : 'Small Projects'
                    }
                </Typography>
            </Grid>
            <Divider
                variant='middle'
                sx={ {
                    borderColor: ( theme ) => theme.palette.common.white
                    , width: '75%'
                } }
            />
            <Grid
                container
                sx={ {
                    width: isMdScreen
                        ? '100%'
                        : '90%'
                } }
                spacing={ 4 }
            >
                { projectType === 'large'
                    ? largeProjects.map( project =>
                        <WorkItemComponent
                            key={ project.id }
                            project={ project }
                        /> )
                    : smallProjects.map( project =>
                        <WorkItemComponent
                            key={ project.id }
                            project={ project }
                        /> )
                }
            </Grid>
        </Grid>
    );
};

export default ProjectList;